import React, { useState, useEffect } from 'react';
import { Box, VStack, SimpleGrid, Text, HStack, Flex, Spinner, Center, useBreakpointValue } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';
import CategoryMenu from '../components/CategoryMenu';
import CountryMenu from '../components/CountryMenu';
import SearchBar from '../components/SearchBar';
import NewsCard from '../components/NewsCard';
import { fetchNews, searchNews } from '../utils/api';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (searchQuery) {
          data = await searchNews(searchQuery);
        } else {
          data = await fetchNews(category, country);
        }
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to fetch news');
      }
      setLoading(false);
    };
    getNews();
  }, [category, country, searchQuery]);

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  return (
    <VStack
      spacing={6}
      width="100vw"
      height="100vh"
      overflow="auto"
      p={4}
      align="stretch"
    >
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={4}
      >
        <CategoryMenu category={category} setCategory={setCategory} />
        <CountryMenu country={country} setCountry={setCountry} />
        <SearchBar setSearchQuery={setSearchQuery} />
      </Box>
      {loading && (
        <Center>
          <Spinner size="xl" />
        </Center>
      )}
      {error && (
        <Box textAlign="center" py={10}>
          <Text color="red.500" fontSize="lg" fontWeight="bold">
            <WarningIcon boxSize={6} color="red.500" mr={2} />
            {error}
          </Text>
        </Box>
      )}
      {!loading && !error && (
        <SimpleGrid columns={columns} spacing={6}>
          {articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
}
