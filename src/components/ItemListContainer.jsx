import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { Heading, Center } from '@chakra-ui/react'
import bgTitle from '../assets/titlebg.jpg'
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import Loading from './Loading'

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(()=>{
    const db = getFirestore();
    const universeObjs = collection(db, "UnniversseObjects");
    getDocs(universeObjs).then((querySnapshot)=>{
      const products = querySnapshot.docs.map((doc)=>({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(products);
    });
  }, [])

  const catFilter = products.filter((product) => product.category === category);
  
  return (
    <div>
      <Center bgImage={bgTitle} h="100px" color="black">
        <Heading  color='violet' as="h2" size="xl">
          Univversse objects
        </Heading>
      </Center>
      {products.length > 0 ? (category ? <ItemList products={catFilter} /> : <ItemList products={products} />) : <Loading/>}
    </div>
  )
}


export default ItemListContainer