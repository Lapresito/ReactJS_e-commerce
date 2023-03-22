import React from "react";
import { FormControl, FormLabel, Input, Box, Button, Textarea, FormHelperText } from "@chakra-ui/react";
const Form = () => {
  return (
    <>
      <FormControl bgGradient="linear(to-r, red.500, yellow.500)">
        <Box>
          <FormLabel borderWidth="2px">Full name</FormLabel>
          <Input type="text" />
          <FormLabel borderWidth="2px">Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your info.</FormHelperText>
        </Box>
        <FormLabel>Any comments?</FormLabel>
        <Textarea borderWidth="2px"></Textarea>
        <Box className="btn-send">
          <Button
            borderWidth="2px"
            type="submit"
            variant="outline"
            color="black"
            _hover={{
              bgColor: "yellow",
            }}
          >
            Confirm order
          </Button>
        </Box>
      </FormControl>
    </>
  );
};

export default Form;
