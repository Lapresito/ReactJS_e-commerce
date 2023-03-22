import { Button, Container, Box, Center, Heading, Text } from "@chakra-ui/react";
import bgTitle from "../assets/titlebg.jpg";
import { CartContext } from "../context/ShoppingCartContext";
import React, { useContext, useState, useEffect } from "react";
import Form from "./Form";
import { Link } from "react-router-dom";
import Item from "./Item";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }, [cart]);

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const condition = () => {
    if (cart.length) {
      return<><Box>Total: U$D {total}</Box><Container><Form /></Container></>;
    } else {
      return (
        <>
        <Text>Your cart is empty! Have a look at our catalogue!</Text>
        <Link to={"/catalogue"}>
          <Button>Catalogue</Button>
        </Link>
        </>
      );
    }
  };

  return (
    <>
      <Center bgImage={bgTitle} h="100px" color="black">
        <Heading color="violet" as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      <Box>
        {cart.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Container className="cart-container">
                <Box>{item.name}</Box>
                <Box>Quantity:{item.quantity}</Box>
                <Box className="subtotal">
                  Price: U$D {item.price * item.quantity}
                </Box>
                <Button onClick={() => handleDelete(item.id)}>
                  <span className="material-symbols-outlined">delete</span>
                </Button>
              </Container>
            </React.Fragment>
          );
        })}
        <Container>
          {condition()}
        </Container>
      </Box>
    </>
  );
};

export default Cart;
