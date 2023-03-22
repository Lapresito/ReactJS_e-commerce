import React, { useContext } from "react";
import {
  Button,
  Divider,
  Text,
  Center,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const addItem = () => {
    if (count < stock) {
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
    setCart((currentItems) => {
      const existingItemIndex = currentItems.findIndex((item) => item.id === id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += count;
        return updatedItems;
      } else {
        return [...currentItems, {id, name, price, quantity: count}];
      }
    });
  };
console.log(stock)
  return (
    <>
      <Center>
        <Button onClick={substractItem}> - </Button>
        <Text fontSize="1.5rem" p="2px">
          {count}
        </Text>
        <Button onClick={addItem}>+</Button>
        <Divider />
        {stock > 0 ? (<Button width="100%" onClick={sendToCart}>
            Add to Cart
          </Button>) : (<Text color="gray.500">Out of stock</Text>)}
      </Center>
      {showAlert && (
        <Alert status="warning">
          <AlertIcon />
          No more stock
        </Alert>
      )}
    </>
  );
};

export default ItemCount;
