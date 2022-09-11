import { Box, Button, Code, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";

const OrderSuccess = () => {
  return (
    <Flex
      justifyContent="center"
      textAlign="center"
      alignItems="center"
      mt="25vh"
      bg="#f7fafc"
      p="30px"
    >
      <Box>
        <Box align="center">
          <BsCheckCircleFill color="#36b50ceb" fontSize="90px" />
        </Box>
        <Box>
          <Heading fontSize="70px">You're all set!</Heading>
          <Code fontSize="17px" mt="10px">
            ORDER NO = {Math.round(Math.random() * 100000 + 1000)}
          </Code>
        </Box>
        <Box color="#7d7d7d" fontSize="20px" fontWeight="500" mt="20px">
          <Text>Thanks for being awesome,</Text>
          <Text>we hope you enjoy your purchase!</Text>
        </Box>

        <Button
          mt="30px"
          leftIcon={<IoHomeSharp fontSize="17px" />}
          fontSize="17px"
        >
          <Link to="/in"> Home</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default OrderSuccess;
