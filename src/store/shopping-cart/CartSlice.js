import {createSlice} from '@reduxjs/toolkit'
 
const initialState={
     
    cartItems :[],
    totalQuantity:0,
    totalAmount:0

}

const CartSlice =createSlice({
   
    name :'cart',
    initialState,
    reducers:{
         addItem(state,action){
             
            const newItem=action.payload;
            const exsistItem=state.cartItems.find((item)=> item.id === newItem.id)
            state.totalQuantity++

            if(!exsistItem){
                 state.cartItems.push({
                    id:newItem.id,
                    title:newItem.title,
                    image01:newItem.image01,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                 })
            }
            else{
                 
                exsistItem.quantity++
                exsistItem.totalPrice=Number(exsistItem.totalPrice) + Number(newItem.price)
            }

            state.totalAmount=state.cartItems.reduce((total,item) =>(
                 
                 total + Number(item.price) * Number(item.quantity)
            ))
         },

         removeItem(state,action){
              
            const id=action.payload;
            const exsistingItem=state.cartItems.find((item) => item.id === id)
            state.totalQuantity--

            if(exsistingItem .quantity === 1){
                 
                state.cartItems=state.cartItems.filter((item) => item.id !== id)

            }else{
                 
                exsistingItem.quantity--
                exsistingItem.totalPrice=Number(exsistingItem.totalPrice) - Number(exsistingItem.price)
            }

            state.totalAmount=state.cartItems.reduce((total,item) => (
                 
                total + Number(item.price) * Number(item.quantity)
            ),0)
         },

         deleteItem(state,action){

              const id=action.payload;
              const exsistingItem=state.cartItems.find((item) => item.id === id);

              if(exsistingItem){
                 
                state.cartItems=state.cartItems.filter((item) => item.id !== id)
                state.totalQuantity=state.totalQuantity - exsistingItem.quantity
              }

              state.totalAmount=state.cartItems.reduce((total,item) => (
                 
                total + Number(item.price) * Number(item.quantity)
              ),0)
         }
    }
})

export const{addItem,removeItem,deleteItem} =CartSlice.actions;
export default CartSlice.reducer;