
import { Box, Flex, Input, ListItem, UnorderedList } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  getKidsClothes,
  getMenClothes,
  getWomenClothes,
} from "../../Redux/AppReducer/action";
import SearchList from "./SearchList";

// const SearchInput = ({ section }) => {
//   const menClothes = useSelector((state) => state.AppReducer.menClothes);
//   const womenClothes = useSelector((state) => state.AppReducer.womenClothes);
//   const kidsClothes = useSelector((state) => state.AppReducer.kidsClothes);

//   const dispatch = useDispatch();

//   const [searchParams, setSearchParams] = useSearchParams([]);
//   const [initialTermValue] = searchParams.getAll("searchTerm");
//   const [inputValue, setInputValue] = useState(initialTermValue || "");

//   const handleChangeTerms = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleTrendingSearch = (value) => {
//     setInputValue(value);
//   };

//   console.log(inputValue);

  useEffect(() => {
    let timer;
    if (inputValue && section) {
      const params = {
        searchTerm: inputValue,
        section,
      };
      setSearchParams(params);

      if (section === "WOMAN") {
        let searchQuery = {
          params: {
            q: inputValue,
          },
        };

        timer = setTimeout(() => {
          dispatch(getWomenClothes(searchQuery));
        }, 1500);

        return () => clearTimeout(timer);
      } else if (section === "MAN") {
        let searchQuery = {
          params: {
            q: inputValue,
          },
        };

        timer = setTimeout(() => {
          dispatch(getMenClothes(searchQuery));
        }, 1500);

        return () => clearTimeout(timer);
      } else if (section === "KIDS") {
        let searchQuery = {
          params: {
            q: inputValue,
          },
        };

        const timer = setTimeout(() => {
          dispatch(getKidsClothes(searchQuery));
        }, 1500);

        return () => clearTimeout(timer);
      }
    } else {
      setSearchParams([]);
    }

    return () => clearTimeout(timer);
  }, [dispatch, initialTermValue, inputValue, section, setSearchParams]);


//   return (
//     <Box>
//       <Flex justifyContent="flex-end">
//         <Input
//           border="0px"
//           borderBottom="1px solid black"
//           w="90%"
//           m="10px"
//           placeholder="ENTER SEARCH TERMS"
//           _hover={false}
//           focusBorderColor="0px"
//           rounded="0px"
//           _placeholder={{ color: "black", fontSize: "30px", fontWeight: "340" }}
//           p="0px 0px 12px 0px"
//           fontWeight="600"
//           value={inputValue}
//           fontSize="30px"
//           onChange={handleChangeTerms}
//           textTransform="uppercase"
//           letterSpacing="-0.2px"
//         />
//       </Flex>

      <Box>
        {inputValue ? (
          <>
            {section === "WOMAN" ? (
              <Flex
                flexWrap="wrap"
                columnGap="10px"
                rowGap="25px"
                p="20px"
                justifyContent="center"
              >
                {womenClothes.length > 0 &&
                  womenClothes.map((cloth) => (
                    <SearchList
                      section={section}
                      key={cloth.id}
                      clothes={cloth}
                    />
                  ))}
              </Flex>
            ) : section === "MAN" ? (
              <Flex
                flexWrap="wrap"
                rowGap="25px"
                columnGap="10px"
                p="20px"
                justifyContent="center"
              >
                {menClothes.length > 0 &&
                  menClothes.map((cloth) => (
                    <SearchList
                      key={cloth.id}
                      section={section}
                      clothes={cloth}
                    />
                  ))}
              </Flex>
            ) : section === "KIDS" ? (
              <Flex
                flexWrap="wrap"
                rowGap="25px"
                columnGap="10px"
                p="20px"
                justifyContent="center"
              >
                {kidsClothes.length > 0 &&
                  kidsClothes.map((cloth) => (
                    <SearchList
                      key={cloth.id}
                      section={section}
                      clothes={cloth}
                    />
                  ))}
              </Flex>
            ) : (
              ""
            )}
          </>
        ) : (
          <Box m="10rem" mt="5rem">
            <UnorderedList
              display="flex"
              flexDirection="column"
              gap="10px"
              fontSize="16px"
              listStyleType="none"
              fontWeight="500"
              color="#7f7f7f"
              lineHeight="2.4rem"
            >
              <ListItem w="70px" cursor="pointer" color="#000000">
                TRENDS
              </ListItem>
              <ListItem
                w="70px"
                cursor="pointer"
                onClick={() => handleTrendingSearch("DRESS")}
              >
                DRESS
              </ListItem>
              <ListItem
                w="70px"
                cursor="pointer"
                onClick={() => handleTrendingSearch("TOP")}
              >
                TOP
              </ListItem>
              <ListItem
                w="70px"
                cursor="pointer"
                onClick={() => handleTrendingSearch("JEANS")}
              >
                JEANS
              </ListItem>
              <ListItem
                w="70px"
                cursor="pointer"
                onClick={() => handleTrendingSearch("BLAZER")}
              >
                BLAZER
              </ListItem>
            </UnorderedList>
          </Box>
        )}
      </Box>
    </Box>
  );
};


// export default SearchInput;
