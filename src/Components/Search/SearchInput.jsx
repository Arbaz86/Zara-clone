import { Flex, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getMenClothes } from "../../Redux/AppReducer/action";

const SearchInput = () => {
  const menClothes = useSelector((state) => state.AppReducer.menClothes);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams([]);
  const [initialTermValue] = searchParams.getAll("searchTerm");
  const [inputValue, setInputValue] = useState(initialTermValue || "");

  const handleChangeTerms = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (menClothes.length === 0) {
      dispatch(getMenClothes());
    }
  }, [dispatch, menClothes]);

  return (
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
  );
};

export default SearchInput;
