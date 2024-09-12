import React, { useState } from 'react'
import { Input, InputGroup, InputRightElement, Button, useBreakpointValue } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

export default function SearchBar({ setSearchQuery }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    setSearchQuery(query)
  }
  const width = useBreakpointValue({ base: '70%', md: '600px' });

  return (
    <InputGroup width={width}>
      <Input
        placeholder={('Search NEWS Here.....')}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        size="sm"
      />
      <InputRightElement width="4.5rem" h="100%"  >
        <Button h="100%" size="sm" onClick={handleSearch} position="absolute"
          right="0"
          top="0"
          bottom="0"
          height="100%"
          borderLeftRadius="0"
        >
          <SearchIcon />
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}