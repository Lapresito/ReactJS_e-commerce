import React from "react";
import { Button, Divider, Text, Center } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemCount = ({ top }) => {
  const [count, setCount] = useState(1);
  const addItem = () => {
    if (count != top) {
      setCount(count + 1);
    } else {
      console.log("error");
    }
  };
  const substractItem = () => {
    if (count != 1) {
      setCount(count - 1);
    }
  };
  const sendToCart = () => {
    setCount(1);
  };
  return (
    <>
      <Center>
        <Button onClick={() => substractItem()}> - </Button>
        <Text fontSize='1.5rem' p='2px'> {count} </Text>
        <Button onClick={() => addItem()}>+</Button>
        <Divider/>
        <Button width='100%' onClick={sendToCart}>Add to Cart</Button>
      </Center>
    </>
  );
};

export default ItemCount;
