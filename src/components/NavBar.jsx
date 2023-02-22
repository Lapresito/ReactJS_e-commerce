import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bgGradient="linear(to-l, #7928CA, #FF0080)">
        <Flex alignItems="center" gap="2">
          <Avatar
            size="xl"
            src="https://assets.newatlas.com/dims4/default/ac389ce/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Funiverse-expanding-acceleration-1.jpg"
          />
          <Box p="10" w="300px" h="100">
            <Heading size="lg">
              <Link to={"/"}>Unniversse</Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <Link to={"/catalogue"}>
                <MenuButton
                  as={Button}
                  size="lg"
                  variant="outline"
                  bgGradient="linear(to-r, teal.500, green.500)"
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  m="5"
                >
                  Catalogue
                </MenuButton>
              </Link>
            </Menu>
            <Menu
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categories
              </MenuButton>
              <MenuList
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                className="menu-list"
              >
                <Link to={`/category/${"Planets"}`}>
                  <MenuItem
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                  >
                    Planets
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Satellites"}`}>
                  <MenuItem
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                  >
                    Satellites
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Galaxies"}`}>
                  <MenuItem
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                  >
                    Galaxies
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Comets"}`}>
                  <MenuItem
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                  >
                    Comets
                  </MenuItem>
                </Link>
                <Link to={`/category/${"Stars"}`}>
                  <MenuItem
                    bgGradient="linear(to-r, teal.500, green.500)"
                    _hover={{
                      bgGradient: "linear(to-r, red.500, yellow.500)",
                    }}
                  >
                    Stars
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
          <Spacer />
          <Box p="10" w="300px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
