import React from "react";
import { useState, createContext } from "react";


export const CartContext = createContext(null);

const ShoppingCartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  // console.log(cart, setCart)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartContextProvider;