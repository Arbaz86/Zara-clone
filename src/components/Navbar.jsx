import React from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <>
      <Box fontFamily={"Neue-Helvetica"} fontSize="16px" bg="#2222c" w="100vw">
        <Flex>
          <Flex w={"25%"} p={"4"} h={"15vh"} justifyContent={"space-between"}>
            <SideBar />
            <Divider />
            <Link to={"/in"}>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/640px-Zara_Logo.svg.png"
                alt="Zara icon"
              />
            </Link>
          </Flex>
          <Spacer />
          <Box p="4">
            <Flex>
              <Link to={"/in/search"} cursor="pointer">
                <Input
                  variant={"flushed"}
                  focusBorderColor
                  placeholder={"Search here"}
                  isReadOnly
                />
              </Link>
              <Spacer />
              <Box as="flex" padding={"10px"}>
                {isAuth ? (
                  ""
                ) : (
                  <Button bg={"transparent"}>
                    <Link to={"/in/login"}>login</Link>
                  </Button>
                )}
                <Button bg={"transparent"}>
                  <Link to={"/in/Help"}>Help</Link>
                </Button>
                <Link to={"/in/cart"}>
                  <Button bg={"transparent"}>
                    <FiShoppingBag />
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
