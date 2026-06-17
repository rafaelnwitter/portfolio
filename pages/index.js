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
import { featuredWorks as works } from '../lib/works'
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

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
        Software engineer focused on backend, production systems and
        cloud-native integrations from Brazil.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rafael Nilson Witt
          </Heading>
          <p>@rafaelnwitter ( Software Engineer / Backend / Infrastructure )</p>
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
          I&apos;m a software engineer with 3+ years of experience building and
          operating backend services, APIs and cloud-native systems. My recent
          work focuses on Node.js, TypeScript, Python, AWS serverless
          infrastructure, event-driven integrations, automated testing and
          production reliability.
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
            A selection of projects from professional work, freelance delivery
            and private GitHub repositories. Open any card to read a deeper
            technical summary.
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
            <BioSec>
              Full-stack Developer Jr. at Expertise Solutions
            </BioSec>{' '}
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
            <BioYear>2024</BioYear>
            <BioSec>Freelance Full-stack Engineer at 99Freelas</BioSec> <br />
            <BioSpec>
              Worked with: SaaS platforms, API integrations, Meta Graph API,
              Google Ads API, JWT, Swagger, OAuth2
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2025</BioYear>
            <BioSec>Full Stack Engineer at Quality Digital</BioSec> <br />
            <BioSpec>
              Worked with: Node.js 22, TypeScript, AWS Lambda, DynamoDB, SQS,
              SNS, EventBridge, VTEX, Jest, Datadog
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>2025</BioYear>
            <BioSec>
              Solution Architect POCs for Brightdome / Fluidra
            </BioSec>{' '}
            <br />
            <BioSpec>
              Worked with: Alokai, AEM Headless, MedusaJS, Stripe, Algolia,
              regionalization, headless commerce architecture
            </BioSpec>
          </BioSection>
          <br />
          <BioSection>
            <BioYear>Now</BioYear>
            Building production-ready backend and infrastructure systems with
            Node.js, TypeScript, Python and AWS
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
