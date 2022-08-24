import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ clothes, section }) => {
  console.log(clothes);

  return (
    <Box w="16.3vw">
      <Box>
        <Image src={section === "MAN" ? clothes.McImage : clothes.WcImage} />
      </Box>
      <Flex justifyContent={"space-between"}>
        <Text>
          <Link to>
            {section === "MAN" ? clothes.McTitle : clothes.WcTitle}
          </Link>
        </Text>
        <Text>{section === "MAN" ? clothes.McPrice : clothes.WcPrice}</Text>
      </Flex>
    </Box>
  );
};

export default SearchList;
