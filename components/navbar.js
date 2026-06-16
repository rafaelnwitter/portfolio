import { useEffect, useState } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'works', label: 'Works' },
  { id: 'bio', label: 'Bio' },
  { id: 'contact', label: 'Contact' }
]

// Tracks which section is currently in view for the active highlight.
const useScrollSpy = enabled => {
  const [active, setActive] = useState('about')

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [enabled])

  return active
}

const NavLink = ({ href, active, children, ...props }) => {
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        px={3}
        py={1}
        borderRadius="md"
        fontWeight={active ? 'semibold' : 'normal'}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _hover={{ bg: active ? 'grassTeal' : useColorModeValue('blackAlpha.100', 'whiteAlpha.200') }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const active = useScrollSpy(isHome)

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={1}
        >
          {SECTIONS.map(({ id, label }) => (
            <NavLink
              key={id}
              href={`/#${id}`}
              active={isHome && active === id}
            >
              {label}
            </NavLink>
          ))}
          <Link
            href="https://github.com/rafaelnwitter/portfolio"
            target="_blank"
            px={3}
            py={1}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
          >
            <IoLogoGithub />
            Source
          </Link>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Open menu"
              />
              <MenuList>
                {SECTIONS.map(({ id, label }) => (
                  <NextLink key={id} href={`/#${id}`} passHref>
                    <MenuItem as={Link}>{label}</MenuItem>
                  </NextLink>
                ))}
                <MenuItem
                  as={Link}
                  href="https://github.com/rafaelnwitter/portfolio"
                  target="_blank"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
