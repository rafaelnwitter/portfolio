import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear, BioSec, BioSpec } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Whats up, I&apos;m an backend developer and experimental frontend from Brazil!
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
              src="/images/rafael.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          As a Back-End Developer Junior with 1 year of development

        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Itaiopolis (SC), Brazil
        </BioSection><br />
        <BioSection>
          <BioYear>2018</BioYear>
          Initiate the Information Systems Undergraduate&apos;s program at University Federal of Santa Catarina
        </BioSection><br />
        <BioSection>
          <BioYear>03/2020-05/2020</BioYear> 
          <BioSec>Technical Support Internship at Nexxera</BioSec> <br />
            <BioSpec>Worked with: Jira, Bash, SQL</BioSpec>
        </BioSection><br />
        <BioSection>
          <BioYear>03/2021-06/2021</BioYear>
          <BioSec>Fullstack developer internship at Publya</BioSec> <br />
            <BioSpec>Worked with: Flask, HTML templates, CSS, JavaScript, PostgreSQL</BioSpec>
        </BioSection><br />
        <BioSection>
          <BioYear>06/2021-10/2021</BioYear>
          <BioSec>Fullstack developer jr at Expertise Solutions</BioSec> <br />
            <BioSpec>Worked with: NodeJS, NestJS, Typescript, React, GraphQL, PostgreSQL, Kafka, TypeORM, Docker</BioSpec>
        </BioSection><br />
        <BioSection>
          <BioYear>01/2022-09/2022</BioYear>
          <BioSec>Backend developer at Keeps</BioSec> <br />
            <BioSpec>Worked with: Django, Flask, Python3, Jinja, Sqlalchemy, PostgreSQL, Docker, Pytest</BioSpec>
        </BioSection><br />
        <BioSection>
          <BioYear>Studying</BioYear>
          NodeJS and NestJS (Typescript) for backend development
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Playing, Drawing, Playing Guitar, Skateboarding, Cybersecurity
        </Paragraph>
      </Section>

      <Section delay={0.3}>
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
      </Section>
    </Container>
  </Layout>
)

export default Home
