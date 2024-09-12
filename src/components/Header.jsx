import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  Select,
  IconButton,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="header" width='100vw' bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} alignItems="center" justifyContent="space-between">
        <Heading as={RouterLink} to="/" size="lg" fontWeight="bold">
          ACONEWS
        </Heading>
        <Flex alignItems="center">
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            aria-label={`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'} Mode`}
            size="sm"
          />
        </Flex>
      </Flex>
    </Box>
  )
}