import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./CartReducer";

export let CartContext = createContext()

// let getCartData = () => {
//   let newCartData = localStorage.getItem('cartItems')

//   if (newCartData.length===0) { 
//     return []

//   } else {
//     return JSON.parse(newCartData)
//   }

// }

const Context = ({ children }) => {
  let initialState = {
    cart: []
  }

  let [state, dispatch] = useReducer(reducer , initialState)

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(state.cart))
  // }, [state.cart])

  return (
    <CartContext.Provider value={{ state, dispatch }} >
      {children}
    </CartContext.Provider>
  )
}

export default Context