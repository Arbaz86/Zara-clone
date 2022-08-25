import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import SearchInput from "../Components/Search/SearchInput";

const SearchProduct = () => {
  const [section, setSection] = useState("WOMAN");

  const handleSection = (value) => {
    setSection(value);
  };

  return (
    <Box>
      <Box h="12vh"></Box>

      <Box>
        <UnorderedList
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="30px"
          fontSize="18px"
          listStyleType="none"
          mb="4.5rem"
        >
          <ListItem
            cursor="pointer"
            onClick={() => handleSection("WOMAN")}
            fontWeight={section === "WOMAN" ? "bold" : ""}
          >
            WOMAN
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => handleSection("MAN")}
            fontWeight={section === "MAN" ? "bold" : ""}
          >
            MAN
          </ListItem>
          <ListItem
            cursor="pointer"
            onClick={() => handleSection("KIDS")}
            fontWeight={section === "KIDS" ? "bold" : ""}
          >
            KIDS
          </ListItem>
        </UnorderedList>
      </Box>

      <Box>
        <SearchInput section={section} />
      </Box>
    </Box>
  );
};

export default SearchProduct;
