import React from "react";
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
  Alert,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState } from "react";

const ItemDetail = ({ uniObjs }) => {
  const { id } = useParams();
  const universeObjFilter = uniObjs.filter(
    (universeObj) => universeObj.id == id
  );

  return (
    <>
      {universeObjFilter.map((universeObj) => (
        <div key={universeObj.id}>
          <Center p="1rem">
            <Card
              bgGradient="linear(to-r, green.200, pink.500)"
              className="card-main"
            >
              <CardBody>
                <Stack mt="6" spacing="3">
                  <Center>
                    <Image
                      borderRadius="lg"
                      width="60%"
                      height="40%"
                      src={universeObj.image}
                    />
                  </Center>
                  <Heading size="md">{universeObj.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    {universeObj.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Category: {universeObj.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {universeObj.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: U$D {universeObj.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  id={universeObj.id}
                  stock={universeObj.stock}
                  name={universeObj.name}
                  price={universeObj.price}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
