import React from 'react'
import { Container } from '@chakra-ui/react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {products?.map((universeObj) => (
          <Item
            key={universeObj.id}
            id={universeObj.id}
            name={universeObj.name}
            description={universeObj.description}
            price={universeObj.price}
            stock={universeObj.stock}
            category={universeObj.category}
            image={universeObj.image}
          />
        ))}
      </Container>
    </>
  )
}

export default React.memo(ItemList)