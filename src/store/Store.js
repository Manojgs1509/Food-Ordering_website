import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../store/shopping-cart/CartSlice';
import cartUiReducer from '../store/shopping-cart/CartUiSlice'

export const Store=configureStore({
     
      reducer:{
          
        cart:cartReducer,
        cartUi:cartUiReducer
      }
})