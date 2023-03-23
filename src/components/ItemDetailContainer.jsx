import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const {id} = useParams();

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

  const catFilter = products.filter((product) => product.id === id);
  return (
    <>{products.length > 0 ? (id ? <ItemDetail products={catFilter} /> : <ItemDetail products={products} />) : <div>Loading...</div>}
    </>
  );
};

export default ItemDetailContainer;
