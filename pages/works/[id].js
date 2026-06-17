import NextLink from 'next/link'
import {
  Container,
  Badge,
  Button,
  Box,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Stack,
  Image,
  AspectRatio,
  Flex,
  Icon,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { IoPlayCircleOutline } from 'react-icons/io5'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import P from '../../components/paragraph'
import { Meta } from '../../components/work'
import works, { getWork } from '../../lib/works'

const VideoPlaceholder = () => {
  const bg = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  const color = useColorModeValue('gray.600', 'gray.400')
  const borderColor = useColorModeValue('blackAlpha.300', 'whiteAlpha.300')
  return (
    <AspectRatio ratio={16 / 9} my={4}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg={bg}
        borderRadius="lg"
        borderWidth={1}
        borderStyle="dashed"
        borderColor={borderColor}
        color={color}
      >
        <Icon as={IoPlayCircleOutline} boxSize={12} mb={2} />
        <Text fontSize="sm">Video coming soon</Text>
      </Flex>
    </AspectRatio>
  )
}

const WorkDetail = ({ work }) => {
  const headerBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')
  const backLinkColor = useColorModeValue('#3d7aed', '#ff63c3')

  if (!work) return null

  const projectLinks = [
    ...(work.repository
      ? [{ label: 'Repository', href: work.repository }]
      : []),
    ...work.links
  ]

  return (
    <Layout
      title={work.title}
      description={work.summary}
      image={work.thumbnail}
    >
      <Container>
        {/* Breadcrumb */}
        <Box mb={4}>
          <Link as={NextLink} href="/#works">
            Works
          </Link>
          <ChevronRightIcon mx={1} />
          <Text as="span">{work.title}</Text>
        </Box>

        <Box
          bg={headerBg}
          borderRadius="lg"
          p={5}
          mb={6}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <Stack
            direction="row"
            align="center"
            justify="space-between"
            wrap="wrap"
            spacing={2}
          >
            <Heading as="h2" fontSize={26}>
              {work.title}
            </Heading>
            <Badge colorScheme="teal">{work.period}</Badge>
          </Stack>
          <Text mt={1} opacity={0.8}>
            {work.role} &middot; {work.company}
          </Text>
        </Box>

        <Image
          src={work.thumbnail}
          alt={`${work.title} cover`}
          borderRadius="lg"
          w="full"
          mb={6}
          loading="lazy"
        />

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          {work.description.map((para, i) => (
            <P key={i}>{para}</P>
          ))}
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Highlights
          </Heading>
          <List spacing={2} mt={2}>
            {work.highlights.map(item => (
              <ListItem key={item} display="flex">
                <ChevronRightIcon mt={1} mr={2} color="teal.400" />
                <span>{item}</span>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Stack
          </Heading>
          <Stack direction="row" wrap="wrap" spacing={0} gap={2} mt={2}>
            {work.stack.map(tech => (
              <Meta key={tech}>{tech}</Meta>
            ))}
          </Stack>
        </Section>

        {projectLinks.length > 0 && (
          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              Links
            </Heading>
            <Stack direction="row" wrap="wrap" spacing={2} mt={2}>
              {projectLinks.map(link => (
                <Button
                  key={link.href}
                  as={Link}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  rightIcon={<ExternalLinkIcon />}
                >
                  {link.label}
                </Button>
              ))}
            </Stack>
          </Section>
        )}

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Gallery
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={3} mt={3}>
            {work.gallery.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`${work.title} screenshot ${i + 1}`}
                borderRadius="lg"
                w="full"
                loading="lazy"
              />
            ))}
          </SimpleGrid>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Video
          </Heading>
          {work.video ? (
            <AspectRatio ratio={16 / 9} my={4}>
              <Box as="video" src={work.video} controls borderRadius="lg" />
            </AspectRatio>
          ) : (
            <VideoPlaceholder />
          )}
        </Section>

        <Box align="center" my={8}>
          <Link
            as={NextLink}
            href="/#works"
            color={backLinkColor}
            fontWeight="semibold"
          >
            &larr; Back to all works
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export const getStaticPaths = () => ({
  paths: works.map(w => ({ params: { id: w.id } })),
  fallback: false
})

export const getStaticProps = ({ params }) => ({
  props: { work: getWork(params.id) || null }
})

export default WorkDetail
