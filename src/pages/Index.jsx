import { Box, Flex, Text, VStack, Heading, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.100">
        <Heading size="lg">John Doe</Heading>
        <VStack as="nav" spacing={4} align="flex-end">
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </VStack>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="md">About Me</Heading>
        <Text mt={2}>
          Passionate web developer with a knack for creating elegant solutions in the least amount of time.
        </Text>
      </Box>
      <Box id="portfolio" p={4}>
        <Heading size="md">Portfolio</Heading>
        <Flex mt={2} wrap="wrap" justifyContent="space-around">
          <Box p={4} boxShadow="md" borderRadius="md">
            <Text>Project 1</Text>
          </Box>
          <Box p={4} boxShadow="md" borderRadius="md">
            <Text>Project 2</Text>
          </Box>
        </Flex>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="md">Contact</Heading>
        <VStack mt={2}>
          <Button leftIcon={<FaEnvelope />} variant="outline">
            Email Me
          </Button>
          <Button leftIcon={<FaGithub />} variant="outline">
            Github
          </Button>
          <Button leftIcon={<FaLinkedin />} variant="outline">
            LinkedIn
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;