import { createContext } from "react";
import React from "react";
import { useState } from "react";

export const CartContext = createContext(null);

const authToken = localStorage.getItem("token");

function CartContextProvider(props) {
  const [getCartItems, setCartItems] = useState();


   function getUsersCart() {

     fetch("/carts", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => res.json())
    .then((res)=> setCartItems(res))
  }

  const contextValues = {getCartItems, getUsersCart};
  return (
    <CartContext.Provider value={contextValues}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
