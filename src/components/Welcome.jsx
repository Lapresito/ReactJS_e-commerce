import React from 'react'
import { Heading, Text, Image } from '@chakra-ui/react';


const Welcome = () => {
  return (
    <div className='welcomeLayout'>

  <Heading color='violet'>
    Welcome to Unniversse E-Shop!
  </Heading>


  <Text>
A perfect place to discover the Universe!
  </Text>
<Image src='https://static.nationalgeographicla.com/files/styles/image_3200/public/49855.jpg?w=1900&h=1749' w='80%' h='70%'/>


  </div>
  )
}

export default Welcome