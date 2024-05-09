import { createSlice } from "@reduxjs/toolkit";


const CartUiSlice=createSlice({
     
    name:'cartUi',
    initialState:{
         cartIsVisible:false
    },
    reducers:{
         
        toggle(state){
             
            state.cartIsVisible=!state.cartIsVisible;
        }
    }
})


export default CartUiSlice.reducer;
export const {toggle} =CartUiSlice.actions;

