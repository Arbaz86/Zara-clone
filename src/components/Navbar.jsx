import React from 'react';
import {Box, Button, Divider, Flex, HStack, Icon, Image, Input, Spacer} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import SideBar from './SideBar';


const Navbar = () => {
  return (
    <>
    <Box fontFamily={"Neue-Helvetica"} fontSize="16px">
      <Flex>
      <Flex w={"25%"} p={"4"} h={"15vh"} justifyContent={"space-between"}>
        <SideBar/>
        <Divider/>
<Link to={"/"}><Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/640px-Zara_Logo.svg.png' alt='Zara icon'/></Link>
      </Flex>
        <Spacer/>
        <Box p='4'>
          <Flex>
            <Link to={"/search"}><Input variant={"flushed"} placeholder={"Search here"} /></Link>
            <Spacer/>
            <Box as='flex' padding={"10px"}>              
                <Button bg={"transparent"}><Link to={"/login"}>login</Link></Button>
                <Button bg={"transparent"}><Link to={"/Help"}>Help</Link></Button>
                <Link to={"/cart"}><Button bg={"transparent"}><FiShoppingBag  /></Button></Link>
              
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default Navbar