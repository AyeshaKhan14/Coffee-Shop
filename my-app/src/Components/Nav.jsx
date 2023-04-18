import React from "react";
import { Flex, Box, useColorModeValue, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export const Nav = () => {
  return (
    <>
      <Box px={4} bg={useColorModeValue("pink.500", "pink.900")}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <NavLink to="/">
                <Text fontSize='xl' fontWeight={500} >Home</Text>
            </NavLink>
          </Box>

          <Box display={["none", "block", "block"]}>
            <Flex gap={20}>
              <Box>
                <NavLink to="/about">
                <Text fontSize='xl' fontWeight={500} >About</Text>
                </NavLink>
              </Box>

              <Box>
                <NavLink to="/contact">
                <Text fontSize='xl' fontWeight={500} >Contact</Text>
                </NavLink>
              </Box>
              <Box>
                <NavLink to="/login">
                <Text fontSize='xl' fontWeight={500} >Login</Text>
                </NavLink>
              </Box>
            </Flex>
          </Box>

          <Box display={["block", "none", "none"]} zIndex={2}>
            <Menu zIndex={2}>
              <MenuButton as={Button}>
                <GiHamburgerMenu color={"black"} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NavLink to="/about">About</NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink to="/contact">Contact</NavLink>
                </MenuItem>
                <MenuItem>
                  {" "}
                  <NavLink to="/login">Login</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
