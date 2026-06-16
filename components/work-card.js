import NextLink from 'next/link'
import {
  Box,
  Text,
  Image,
  Badge,
  Stack,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'

const WorkCard = ({ work }) => {
  const cardBg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')
  const borderColor = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const metaColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <LinkBox
      as="article"
      bg={cardBg}
      borderWidth={1}
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
      css={{ backdropFilter: 'blur(8px)' }}
    >
      <Box position="relative" overflow="hidden">
        <Image
          src={work.thumbnail}
          alt={`${work.title} cover`}
          w="full"
          h={{ base: '160px', md: '180px' }}
          objectFit="cover"
          loading="lazy"
        />
      </Box>

      <Box p={4}>
        <Stack
          direction="row"
          align="center"
          justify="space-between"
          mb={1}
          spacing={2}
        >
          <Text fontSize={12} color={metaColor} noOfLines={1}>
            {work.company}
          </Text>
          <Badge colorScheme="teal" fontSize="0.65em">
            {work.period}
          </Badge>
        </Stack>

        <LinkOverlay as={NextLink} href={`/works/${work.id}`} scroll={false}>
          <Text as="h4" fontWeight="bold" fontSize={18} lineHeight="short">
            {work.title}
          </Text>
        </LinkOverlay>

        <Text mt={2} fontSize={14} color={metaColor} noOfLines={3}>
          {work.summary}
        </Text>

        <Stack direction="row" mt={3} wrap="wrap" spacing={0} gap={1}>
          {work.stack.slice(0, 4).map(tech => (
            <Badge key={tech} variant="subtle" colorScheme="gray" fontSize="0.65em">
              {tech}
            </Badge>
          ))}
          {work.stack.length > 4 && (
            <Badge variant="subtle" colorScheme="gray" fontSize="0.65em">
              +{work.stack.length - 4}
            </Badge>
          )}
        </Stack>
      </Box>
    </LinkBox>
  )
}

export default WorkCard
