import React, { useEffect } from 'react';
import { Select, Text, Flex, useBreakpointValue } from '@chakra-ui/react';

const countries = [
  { code: 'au', name: 'Australia' },
  { code: 'br', name: 'Brazil' },
  { code: 'ca', name: 'Canada' },
  { code: 'cn', name: 'China' },
  { code: 'fr', name: 'France' },
  { code: 'de', name: 'Germany' },
  { code: 'in', name: 'India' },
  { code: 'jp', name: 'Japan' },
  { code: 'mx', name: 'Mexico' },
  { code: 'ru', name: 'Russia' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'us', name: 'United States' },
];

export default function CountryMenu({ country, setCountry }) {
  useEffect(() => {
    if (!country) {
      setCountry('in'); // Set "India" as the default country if no country is selected
    }
  }, [country, setCountry]);

  // Use different flex direction based on screen size
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });
  const selectWidth = useBreakpointValue({ base: '100%', md: '700px' });

  return (
    <Flex
      direction={flexDirection}  
      align="center"
      justify='center'  
      mb={4}       
      w="100%"      
    >
      <Text as="b" mr={{ base: 0, md: 2 }} mb={{ base: 2, md: 0 }}>
        Country:
      </Text>
      <Select
        placeholder="Select Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        width={selectWidth} 
        size="sm"
      >
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
            {c.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
}
