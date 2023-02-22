import React from 'react'
import ItemList from './ItemList'
import data from '../data.json'
import { useParams } from 'react-router-dom'
import { Heading, Center } from '@chakra-ui/react'
import bgTitle from '../assets/titlebg.jpg'

const ItemListContainer = () => {
  const {category} = useParams();
  const catFilter = data.filter((universeObj) => universeObj.category === category);
  return (
    <div>
      <Center bgImage={bgTitle} h="100px" color="black">
        <Heading  color='violet' as="h2" size="xl">
          Univversse objects
        </Heading>
      </Center>
      {category ? <ItemList uniObjs={catFilter} /> : <ItemList uniObjs={data} />}
    </div>
  )
}

export default ItemListContainer