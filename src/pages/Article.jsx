import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, Text, Link, useColorModeValue, Spinner } from '@chakra-ui/react'
import { searchNews } from '../utils/api'

export default function Article() {
  const { id } = useParams() 
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const linkColor = useColorModeValue('blue.500', 'blue.300')

  useEffect(() => {
    const getArticle = async () => {
      try {
        const data = await searchNews(id) // Search for articles using the `id` as the query
        // Filter the articles to find the one with the unique identifier
        const filteredArticle = data.articles.find(article => article.url === id)
        setArticle(filteredArticle)
      } catch (err) {
        setError('Failed to fetch article')
      } finally {
        setLoading(false)
      }
    }

    getArticle()
  }, [id])

  if (loading) {
    return <Spinner size="xl" />
  }

  if (error) {
    return <Text color="red.500">{error}</Text>
  }

  if (!article) {
    return <Text>No article found</Text>
  }
  console.log({article})

  return (
    <>
    <h1>hello</h1>
     <Box width="full" p={4}>
       <Heading as="h1" size="2xl" mb={4}>
         {article.title}
       </Heading>
       <Text mb={4}>
         {article.description}
       </Text>
       <Text mb={4}>
         {article.content}
       </Text>
       <Link href={article.url} isExternal color={linkColor}>
         Read Full Article
       </Link>
     </Box>
    </>

  )
}
