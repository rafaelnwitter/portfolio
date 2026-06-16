import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  SimpleGrid,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioSec, BioSpec } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import WorkCard from '../components/work-card'
import works from '../lib/works'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        id="about"
        className="scroll-section"
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hey, I&apos;m a backend developer and experimental front-end tinkerer
        from Brazil!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rafael Nilson Witt
          </Heading>
          <p>@rafaelnwitter ( Developer / Player / Tech Lover )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/rafael.png"
              alt="Profile image"
              borderRadius="full"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          I&apos;m a back-end developer with hands-on experience building APIs,
          event-driven services and data-heavy applications across the Python
          and Node.js ecosystems. I enjoy turning messy requirements into clean,
          reliable systems &mdash; and occasionally jumping to the front-end to
          see ideas come to life.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={Link}
            href="#works"
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            _hover={{ textDecoration: 'none' }}
          >
            See my work
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Box id="works" className="scroll-section">
          <Heading as="h3" variant="section-title">
            Works
          </Heading>
          <Paragraph>
            A selection of projects from my professional journey. Open any card
            to read a deeper summary and browse photos and videos.
          </Paragraph>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} mt={5}>
            {works.map(work => (
              <WorkCard key={work.id} work={work} />
            ))}
          </SimpleGrid>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box id="bio" className="scroll-section">
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Itaiopolis (SC), Brazil
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2018</BioYear>
            Started the Information Systems undergraduate program at the Federal
            University of Santa Catarina
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2020</BioYear>
            <BioSec>Technical Support Intern at Nexxera</BioSec> <br />
            <BioSpec>Worked with: Jira, Bash, SQL</BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2021</BioYear>
            <BioSec>Full-stack Developer Intern at Publya</BioSec> <br />
            <BioSpec>
              Worked with: Flask, HTML templates, CSS, JavaScript, PostgreSQL
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2021</BioYear>
            <BioSec>Full-stack Developer Jr. at Expertise Solutions</BioSec>{' '}
            <br />
            <BioSpec>
              Worked with: NodeJS, NestJS, TypeScript, React, GraphQL,
              PostgreSQL, Kafka, TypeORM, Docker
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2022</BioYear>
            <BioSec>Backend Developer at Keeps</BioSec> <br />
            <BioSpec>
              Worked with: Django, Flask, Python 3, Jinja, SQLAlchemy,
              PostgreSQL, Docker, Pytest
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>Now</BioYear>
            Deepening Node.js and NestJS (TypeScript) for backend development
          </BioSection>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I love
        </Heading>
        <Paragraph>
          Gaming, Drawing, Playing Guitar, Skateboarding, Cybersecurity
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Box id="contact" className="scroll-section">
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/rafaelnwitter" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @rafaelnwitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/rafaelnwitt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @rafaelnwitt
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/r_witt" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @r_witt
                </Button>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
