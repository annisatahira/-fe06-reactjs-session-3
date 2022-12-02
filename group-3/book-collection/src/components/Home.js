import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box padding="20" backgroundColor="pink.300" margin="20" borderRadius="20">
      <Heading as="h1" color="white">
        Welcome to My Book Collection
      </Heading>
      <Text marginTop="10" color="white" fontSize="32">
        Belajar bareng FE6
      </Text>
    </Box>
  );
};

export default Home;
