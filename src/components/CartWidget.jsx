import React from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";


const CartWidget = () => {
  console.log(useContext(CartContext))
  const {cart, setCart} = useContext(CartContext);

  const quantity = cart.reduce ((acc, currentItems) => {
    return acc + currentItems.quantity;
  }, 0);

  return (
    <>
    <div>
      <span className="material-symbols-outlined">shopping_cart</span>
      {quantity}
    </div>
    </>
  );
};

export default CartWidget;
