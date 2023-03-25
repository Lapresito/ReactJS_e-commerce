import React from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Textarea,
  FormHelperText,
  Text,
  Heading,
  Container,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Swal from "sweetalert2";

const Form = () => {
  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { cart, setCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || name === "") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    setEmail("");
  };
  const db = getFirestore();
  const ordersCollection = collection(db, "order");
  const order = {
    name,
    email,
    cart,
  };

  const handleOrder = () => {
    if (orderId) {
      navigator.clipboard
        .writeText(orderId)
        .then(() => {
          setCart([]);
          setOrderId(null);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    }
  };

  return (
    <>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Heading size="s" color="white">
          Complete your order details
        </Heading>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FormControl bgGradient="linear(to-r, red.500, yellow.500)">
            <form onSubmit={handleSubmit}>
              <Box>
                <FormLabel borderWidth="2px">Full name</FormLabel>
                <Input type="text" onChange={(e) => setName(e.target.value)} />
                <FormLabel borderWidth="2px">Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormHelperText>We'll never share your info.</FormHelperText>
              </Box>
              <FormLabel>Any comments?</FormLabel>
              <Textarea borderWidth="2px"></Textarea>
              <Box className="btn-send">
                <Button
          size="m"
          variant="outline"
          bgGradient="linear(to-r, teal.500, green.500)"
          _hover={{
            bgGradient: "linear(to-r, red.500, yellow.500)",
          }}
                >
                  Confirm order
                </Button>
              </Box>
            </form>
          </FormControl>
        </Flex>
        <Center>
          <Text color="white" as="b" m={3}>
            Order ID:{" "}
          </Text>
          <Text as="mark">{orderId}</Text>
        </Center>
        <Button
          onClick={handleOrder}
          size="lg"
                  variant="outline"
                  bgGradient="linear(to-r, teal.500, green.500)"
                  bgColor='rgba(43, 150, 226, 0.744)'
                  _hover={{
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
        >
          {" "}
          Copy ID{" "}
        </Button>
      </Flex>
    </>
  );
};

export default Form;
