import { motion } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GridItemStyle } from '../grid-item'
import { absoluteUrl, canonicalUrl, siteMetadata } from '../../lib/seo'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title, description, image }) => {
  const router = useRouter()
  const pageTitle = title ? `${title} - Rafael Witt` : siteMetadata.title
  const pageDescription = description || siteMetadata.description
  const pageImage = absoluteUrl(image || siteMetadata.image)
  const pageUrl = canonicalUrl(router.asPath)

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta
            key="description"
            name="description"
            content={pageDescription}
          />
          <link key="canonical" rel="canonical" href={pageUrl} />
          <meta key="og-title" property="og:title" content={pageTitle} />
          <meta
            key="og-description"
            property="og:description"
            content={pageDescription}
          />
          <meta key="og-url" property="og:url" content={pageUrl} />
          <meta key="og-image" property="og:image" content={pageImage} />
          <meta key="twitter-title" name="twitter:title" content={pageTitle} />
          <meta
            key="twitter-description"
            name="twitter:description"
            content={pageDescription}
          />
          <meta key="twitter-image" name="twitter:image" content={pageImage} />
        </Head>
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  )
}

export default Layout
