export const reducer = (state,action)=>{

    switch(action.type){
       case "ADDTOCART":
           return{...state,cart:[...state.cart,action.payload]}
   
           default :
           return state
    }
   
   }