import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ clothes, section }) => {
  console.log(clothes);

  return (
    <Box w="15.5vw">
      <Box>
        <Image
          w="16vw"
          src={
            section === "MAN"
              ? clothes.McImage
              : section === "WOMAN"
              ? clothes.WcImage
              : clothes.image
          }
        />
      </Box>
      <Flex justifyContent={"space-between"}>
        <Text w="70%">
          <Link to>
            {section === "MAN"
              ? clothes.McTitle
              : section === "WOMAN"
              ? clothes.WcTitle
              : clothes.name}
          </Link>
        </Text>
        <Text>
          {section === "MAN"
            ? clothes.McPrice
            : section === "WOMAN"
            ? clothes.WcPrice
            : clothes.price}
        </Text>
      </Flex>
    </Box>
  );
};

export default SearchList;
