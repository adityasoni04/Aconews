import React from 'react';
import { Button, SimpleGrid, useColorModeValue, Flex, Center } from '@chakra-ui/react';

const categories = ['General', 'World', 'Nation', 'Business', 'Technology', 'Entertainment', 'Sports', 'Science', 'Health'];

export default function CategoryMenu({ category, setCategory }) {
  const buttonColorScheme = useColorModeValue('blue', 'teal');

  return (
    <Flex width="100%" justifyContent="center" py={4}>
    <SimpleGrid
      columns={{ base: 2, sm: 3, md: 4, lg: 9 }}  
      spacing={4} 
      maxW="100%"  
    >
        {categories.map((cat) => (
          <Button
            key={cat}
            size="sm"
            colorScheme={buttonColorScheme}
            variant={category === cat ? 'solid' : 'outline'}
            onClick={() => setCategory(cat)}
            width="100%" 
          >
            {cat}
          </Button>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
