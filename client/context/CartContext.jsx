import React,{createContext,useReducer} from "react";
import { reducer } from "./CartReducer";

 export let CartContext = createContext()
 

const Context = ({children})=>{
    let initialState={
        cart:[]
    }

    let [state,dispatch] = useReducer(reducer,initialState)

     return(
        <CartContext.Provider value={{state,dispatch}} >
          {children}
        </CartContext.Provider> 
     )
}

export default Context