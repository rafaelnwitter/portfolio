import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { absoluteUrl, canonicalUrl, siteMetadata } from '../../lib/seo'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const profileSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteMetadata.name,
  url: absoluteUrl('/'),
  image: absoluteUrl(siteMetadata.image),
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://github.com/rafaelnwitter',
    'https://linkedin.com/in/rafaelnwitt',
    'https://instagram.com/r_witt'
  ],
  knowsAbout: [
    'Backend engineering',
    'Node.js',
    'TypeScript',
    'Python',
    'AWS',
    'Cloud-native integrations',
    'Production systems'
  ]
}

const Main = ({ children, router }) => {
  const canonical = canonicalUrl(router.asPath)
  const imageUrl = absoluteUrl(siteMetadata.image)

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          key="description"
          name="description"
          content={siteMetadata.description}
        />
        <meta name="author" content={siteMetadata.author} />
        <meta name="robots" content="index, follow" />
        <link key="canonical" rel="canonical" href={canonical} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        <meta property="og:site_name" content={siteMetadata.name} />
        <meta key="og-title" property="og:title" content={siteMetadata.title} />
        <meta
          key="og-description"
          property="og:description"
          content={siteMetadata.description}
        />
        <meta property="og:type" content="website" />
        <meta key="og-url" property="og:url" content={canonical} />
        <meta key="og-image" property="og:image" content={imageUrl} />
        <meta property="og:locale" content={siteMetadata.locale} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter-title"
          name="twitter:title"
          content={siteMetadata.title}
        />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={siteMetadata.description}
        />
        <meta key="twitter-image" name="twitter:image" content={imageUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        />
        <title>{siteMetadata.title}</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
