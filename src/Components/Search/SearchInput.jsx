import { Box, Flex, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMenClothes, getWomenClothes } from "../../Redux/AppReducer/action";
import SearchList from "./SearchList";
import { debounce } from "debounce";

const SearchInput = ({ section }) => {
  const menClothes = useSelector((state) => state.AppReducer.menClothes);
  const womenClothes = useSelector((state) => state.AppReducer.womenClothes);

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams([]);
  const [initialTermValue] = searchParams.getAll("searchTerm");
  const [inputValue, setInputValue] = useState(initialTermValue || "");

  const handleChangeTerms = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  useEffect(() => {
    if (inputValue && section) {
      const params = {
        searchTerm: inputValue,
        section,
      };

      if (section === "WOMAN") {
        console.log(section);
        let searchQuery = {
          params: {
            q: inputValue,
          },
        };

        dispatch(getWomenClothes(searchQuery));
      } else if (section === "MAN") {
        let searchQuery = {
          params: {
            q: inputValue,
          },
        };
        dispatch(getMenClothes(searchQuery));
      }

      setSearchParams(params);
    } else {
      setSearchParams([]);
    }
  }, [dispatch, initialTermValue, inputValue, section, setSearchParams]);

  return (
    <Box>
      <Flex justifyContent="flex-end">
        <Input
          border="0px"
          borderBottom="1px solid black"
          w="90%"
          m="10px"
          placeholder="ENTER SEARCH TERMS"
          _hover={false}
          focusBorderColor="0px"
          rounded="0px"
          _placeholder={{ color: "black", fontSize: "30px", fontWeight: "340" }}
          p="0px 0px 12px 0px"
          fontWeight="600"
          value={inputValue}
          fontSize="30px"
          onChange={handleChangeTerms}
          textTransform="uppercase"
          letterSpacing="-0.2px"
        />
      </Flex>

      <Box>
        {inputValue ? (
          <>
            {section === "WOMAN" ? (
              <>
                {womenClothes.length > 0 &&
                  womenClothes.map((cloth) => (
                    <SearchList
                      section={section}
                      key={cloth.id}
                      clothes={cloth}
                    />
                  ))}
              </>
            ) : (
              <>
                {menClothes.length > 0 &&
                  menClothes.map((cloth) => (
                    <SearchList
                      key={cloth.id}
                      section={section}
                      clothes={cloth}
                    />
                  ))}
              </>
            )}
          </>
        ) : (
          <Box>
            <UnorderedList
              display="flex"
              flexDirection="column"
              gap="10px"
              fontSize="18px"
              listStyleType="none"
            >
              <ListItem cursor="pointer">WOMAN</ListItem>
              <ListItem cursor="pointer">MAN</ListItem>
              <ListItem cursor="pointer">KIDS</ListItem>
            </UnorderedList>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchInput;
