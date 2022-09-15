import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Rafael Nilson Witt. Backend developer junior
    </Box>
  )
}

export default Footer
