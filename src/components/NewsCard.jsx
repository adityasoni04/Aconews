import React from 'react'
import { Box, Image, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react'

export default function NewsCard({ article }) {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardBorder = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" borderColor={cardBorder} bg={cardBg}>
      <Image src={article.image} alt={article.title} />
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          <Link >
            {article.title}
          </Link>
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={2}>
          {new Date(article.publishedAt).toLocaleString()}
        </Text>
        <Text noOfLines={3}>{article.description}</Text>
      </Box>
    </Box>
  )
}