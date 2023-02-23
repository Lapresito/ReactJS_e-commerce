import React from "react";
import { Button, Divider, Text, Center, Alert, AlertIcon } from "@chakra-ui/react";
import { useState } from "react";

const ItemCount = ({ top }) => {
  const [count, setCount] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const addItem = () => {
    if (count < top) {
      setCount(count + 1);
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  const substractItem = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const sendToCart = () => {
    setCount(1);
  };

  return (
    <>
      <Center>
        <Button onClick={substractItem}> - </Button>
        <Text fontSize='1.5rem' p='2px'>
          {count}
        </Text>
        <Button onClick={addItem}>+</Button>
        <Divider />
        {top > 0 ? (
          <Button width='100%' onClick={sendToCart}>
            Add to Cart
          </Button>
        ) : (
          <Text color='gray.500'>Out of stock</Text>
        )}
      </Center>
      {showAlert && (
        <Alert status='warning'>
          <AlertIcon />
          No more stock
        </Alert>
      )}
    </>
  );
};

export default ItemCount;
