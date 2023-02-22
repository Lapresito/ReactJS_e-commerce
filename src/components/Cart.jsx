import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Container,
  Box,
  Textarea,
  Center,
  Heading,
} from "@chakra-ui/react";
import bgTitle from "../assets/titlebg.jpg";

const Cart = () => {
  return (
    <>
      <Center bgImage={bgTitle} h="100px" color="black">
        <Heading color="violet" as="h2" size="2xl">
          Cart
        </Heading>
      </Center>
      <Container className="cart-container">
        <FormControl  bgGradient="linear(to-r, red.500, yellow.500)">
          <Box>
            <FormLabel borderWidth="2px">Your name</FormLabel>
            <Input type="text" />
            <FormLabel borderWidth="2px">Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </Box> 
          <FormLabel>What do you want to tell us?</FormLabel>
          <Textarea borderWidth="2px"></Textarea>
          <Box className="btn-send">
            <Button  borderWidth="2px" type="submit"  variant="outline" color='black' _hover={{
                  bgColor: "yellow",
                }}>
              Send information
            </Button>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Cart;
