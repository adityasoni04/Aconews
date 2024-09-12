import React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';
import theme from './theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minHeight="100vh" display="flex" flexDirection="column">
          {/* Header */}
          <Header />

          {/* Main Content Area */}
          <VStack
            spacing={8}
            flex={1}
            width="full"
            maxWidth="container.xl"
            mx="auto"
            px={{ base: 4, md: 8 }}  // Responsive padding: smaller on mobile, larger on desktop
            py={{ base: 6, md: 8 }}  // Vertical padding
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:id" element={<Article />} />
            </Routes>
          </VStack>

          {/* Footer */}
          <Footer />
        </Box>
      </Router>
    </ChakraProvider>
  );
}
