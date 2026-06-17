export const siteUrl = 'https://portfolio-rafaelnwitt.vercel.app'

export const siteMetadata = {
  name: 'Rafael Nilson Witt',
  title: 'Rafael Nilson Witt - Software Engineer',
  description:
    'Software engineer focused on backend, production systems, cloud-native integrations and portfolio case studies with Node.js, TypeScript, Python and AWS.',
  author: 'Rafael Nilson Witt',
  handle: '@rafaelnwitter',
  locale: 'en_US',
  image: '/images/rafael.png'
}

export const absoluteUrl = path => {
  if (!path) return siteUrl
  if (/^https?:\/\//.test(path)) return path
  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export const canonicalUrl = path => {
  const cleanPath = (path || '/').split('#')[0].split('?')[0]
  return absoluteUrl(cleanPath)
}
