import React from 'react';
import {Box, Button, Divider, Flex, HStack, Icon, Image, Input, Spacer} from "@chakra-ui/react";
// import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import { FiShoppingBag } from "react-icons/fi";
// import DrawerExample from './DrawerContent';

const Navbar = () => {
  return (
    <>
    {/* <div style={{display:"flex",border:"1px solid red",justifyContent:"space-between"}} >
      <div style={{display:"flex",border:"1px solid teal",justifyContent:"space-between"}}>
      <div><SideBar/></div>
      <div style={{padding:"10px 20px 10px 20px",height:"10vh"}}>
        <img src='https://play.google.com/store/apps/details?id=com.inditex.zara&hl=en&gl=US' alt='Zara logo'></img>
      </div>
      </div>
      <div style={{display:"flex",border:"1px solid teal",justifyContent:"space-between"}}>
        <div>search space</div>
        <div style={{display:"flex",border:"1px solid teal",justifyContent:"space-between"}}>
          <div>Login</div>
          <div>help</div>
          <button>Cart icon</button>
        </div>
        </div>
    </div> */}
    <Box border={"1px solid red"}>
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
              
                <Button><Link to={"/login"}>login</Link></Button>
                <Button><Link to={"/Help"}>Help</Link></Button>
                <Link to={"/cart"}><Button><FiShoppingBag  /></Button></Link>
              
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
    </>
  )
}

export default Navbar