import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Icon,
  Button,
  useDisclosure,
  Box,
  Divider,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

// var Data=["NEW","T-SHIRTS","TRACKS","SWEAT-SHIRTS"]

function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState("left");
  // const [women] = useState({Data});
  // const [men] = useState({Data});
  // const [Kids] = useState({Data});
  const [query, setQuery] = useState("");

  return (
    <>
      <Button onClick={onOpen}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Button>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex justifyContent={"space-evenly"}>
            <Box p={"10px"}>
              {isOpen ? <CloseIcon onClick={onClose} /> : <HamburgerIcon />}
            </Box>
            <Box>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/640px-Zara_Logo.svg.png"
                alt="Zara Logo"
              />
            </Box>
          </Flex>
          <Tabs fontFamily={"Neue-Helvetica"} fontSize="16px">
            <TabList>
              <Tab>Women</Tab>
              <Tab>Men</Tab>
              <Tab>Kids</Tab>
            </TabList>

            <TabPanels>
              <TabPanel rowGap={"10"}>
                <Box>New</Box>
                <Link to={"/t-shirts"}>
                  <Box>T-shirts</Box>
                </Link>
                <Link to={"/trackSuits"}>
                  <Box>TrackSuits</Box>
                </Link>
                <Link to={"/trousers"}>
                  <Box>Trousers</Box>
                </Link>
                <Link to={"/sweatshirts"}>
                  <Box>SweatShirts</Box>
                </Link>
              </TabPanel>
              <TabPanel>
                <Box>New</Box>
                <Link to={"/t-shirts"}>
                  <Box>T-shirts</Box>
                </Link>
                <Link to={"/trackSuits"}>
                  <Box>TrackSuits</Box>
                </Link>
                <Link to={"/trousers"}>
                  <Box>Trousers</Box>
                </Link>
                <Link to={"/sweatshirts"}>
                  <Box>SweatShirts</Box>
                </Link>
              </TabPanel>
              <TabPanel>
                <Box>New</Box>
                <Link to={"/t-shirts"}>
                  <Box>T-shirts</Box>
                </Link>
                <Link to={"/trackSuits"}>
                  <Box>TrackSuits</Box>
                </Link>
                <Link to={"/trousers"}>
                  <Box>Trousers</Box>
                </Link>
                <Link to={"/sweatshirts"}>
                  <Box>SweatShirts</Box>
                </Link>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Divider mt={"5%"} color="none" />
          <Text>GIFT CARD</Text>
          <Divider mt={"5%"} color="none" />
          <Text>JOIN LIFE</Text>
          <Divider mt={"5%"} color="none" />
          <Menu>
            <MenuButton as={Button} leftIcon={<AddIcon />} width="50%">
              INFO
            </MenuButton>
            <MenuList>
              <MenuItem>NEWSLETTER</MenuItem>
              <MenuItem>CONTACT US</MenuItem>
              <MenuItem>STORES</MenuItem>
              <MenuItem>HELP</MenuItem>
              <MenuItem>GIFT CARD</MenuItem>
              <MenuItem>PRESS </MenuItem>
              <MenuItem>COMPANY</MenuItem>
            </MenuList>
          </Menu>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideBar;
