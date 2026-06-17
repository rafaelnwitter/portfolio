import projects from './project-data.json'

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

const isNonEmptyString = value =>
  typeof value === 'string' && value.trim().length > 0

const isNonEmptyArray = value => Array.isArray(value) && value.length > 0

const validateProject = project => {
  const missingFields = REQUIRED_TEXT_FIELDS.filter(
    field => !isNonEmptyString(project[field])
  )

  if (missingFields.length > 0) {
    throw new Error(
      `Project "${project.id || 'unknown'}" is missing: ${missingFields.join(', ')}`
    )
  }

  if (!isNonEmptyArray(project.description)) {
    throw new Error(`Project "${project.id}" needs at least one description`)
  }

  if (!isNonEmptyArray(project.highlights)) {
    throw new Error(`Project "${project.id}" needs at least one highlight`)
  }

  if (!isNonEmptyArray(project.stack)) {
    throw new Error(`Project "${project.id}" needs at least one stack item`)
  }

  if (!project.media || !isNonEmptyString(project.media.thumbnail)) {
    throw new Error(`Project "${project.id}" needs a media.thumbnail`)
  }

  if (!isNonEmptyArray(project.media.gallery)) {
    throw new Error(`Project "${project.id}" needs at least one gallery image`)
  }

  return project
}

export const validateProjects = projectList => {
  const ids = new Set()

  return projectList.map(project => {
    validateProject(project)

    if (ids.has(project.id)) {
      throw new Error(`Duplicated project id: ${project.id}`)
    }

    ids.add(project.id)
    return project
  })
}

const normalizeProject = project => ({
  ...project,
  links: project.links || [],
  repository: project.repository || null,
  featured: Boolean(project.featured),
  thumbnail: project.media.thumbnail,
  gallery: project.media.gallery,
  video: project.media.video || null
})

const works = validateProjects(projects).map(normalizeProject)

export const featuredWorks = works.filter(work => work.featured)

export const getWork = id => works.find(work => work.id === id)

export default works
