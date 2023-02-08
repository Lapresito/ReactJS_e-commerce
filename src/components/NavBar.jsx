import React from 'react'
import CartWidget from './CartWidget'
import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Heading,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

const NavBar = () => {
  return (
    <div className='navBar'>
        <Heading as='h1'>Unniversse</Heading>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categories
  </MenuButton>
  <MenuList>
    <MenuItem>Planets</MenuItem>
    <MenuItem>Satellites</MenuItem>
    <MenuItem>Galaxies</MenuItem>
    <MenuItem>Comets</MenuItem>
    <MenuItem>Stars</MenuItem>
  </MenuList>
</Menu>
        <CartWidget/>
    </div>
    
  )
}

export default NavBar