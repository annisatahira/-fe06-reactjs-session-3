import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box margin="20" backgroundColor="red.400" padding="10" borderRadius="10">
      <Heading as="h1" color="white">
        Selamat Datang di My Book Collection
      </Heading>
      <Text paddingTop="10" color="white" fontSize="32">
        belajar reactjs bersama FE6
      </Text>
    </Box>
  );
};

export default Home;
