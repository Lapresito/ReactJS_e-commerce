import React from "react";
import ItemDetail from "./ItemDetail";
import data from "../data.json";

const ItemDetailContainer = () => {
  return (
    <>
      <ItemDetail uniObjs={data} />
    </>
  );
};

export default ItemDetailContainer;
