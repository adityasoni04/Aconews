import React from 'react'
import { Box, Text, Link, useColorModeValue } from '@chakra-ui/react'

export default function Footer() {
  const footerBg = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box as="footer"  width='100vw' bg={footerBg} py={4} textAlign="center">
      <Text>
        {('AcoNews poweredBy')}{' '}
        <Link href="https://gnews.io/" isExternal color="blue.500">
          GNews API
        </Link>
      </Text>
      <b>Build By: Aditya Soni</b>
    </Box>
  )
}