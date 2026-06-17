import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const rootDir = path.resolve(path.dirname(__filename), '..')
const dataPath = path.join(rootDir, 'lib', 'project-data.json')
const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

const REQUIRED_TEXT_FIELDS = [
  'id',
  'title',
  'category',
  'company',
  'role',
  'period',
  'status',
  'source',
  'summary'
]

const errors = []
const ids = new Set()

const isNonEmptyString = value =>
  typeof value === 'string' && value.trim().length > 0

const isNonEmptyArray = value => Array.isArray(value) && value.length > 0

const assertLocalAsset = (project, assetPath, fieldName) => {
  if (!isNonEmptyString(assetPath)) {
    errors.push(`${project.id}: ${fieldName} must be a non-empty path`)
    return
  }

  if (!assetPath.startsWith('/')) {
    errors.push(`${project.id}: ${fieldName} must start with /`)
    return
  }

  const diskPath = path.join(rootDir, 'public', assetPath.slice(1))
  if (!fs.existsSync(diskPath)) {
    errors.push(`${project.id}: ${fieldName} does not exist at public${assetPath}`)
  }
}

projects.forEach(project => {
  REQUIRED_TEXT_FIELDS.forEach(field => {
    if (!isNonEmptyString(project[field])) {
      errors.push(`${project.id || 'unknown'}: missing ${field}`)
    }
  })

  if (ids.has(project.id)) {
    errors.push(`${project.id}: duplicated id`)
  }
  ids.add(project.id)

  if (!isNonEmptyArray(project.description)) {
    errors.push(`${project.id}: description must have at least one item`)
  }

  if (!isNonEmptyArray(project.highlights)) {
    errors.push(`${project.id}: highlights must have at least one item`)
  }

  if (!isNonEmptyArray(project.stack)) {
    errors.push(`${project.id}: stack must have at least one item`)
  }

  if (!project.media) {
    errors.push(`${project.id}: missing media object`)
    return
  }

  assertLocalAsset(project, project.media.thumbnail, 'media.thumbnail')

  if (!isNonEmptyArray(project.media.gallery)) {
    errors.push(`${project.id}: media.gallery must have at least one item`)
  } else {
    project.media.gallery.forEach((assetPath, index) => {
      assertLocalAsset(project, assetPath, `media.gallery[${index}]`)
    })
  }
})

if (errors.length > 0) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Validated ${projects.length} portfolio projects.`)
