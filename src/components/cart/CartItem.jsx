import React from 'react'
import { ListGroupItem } from 'reactstrap'
import '../styles/shopping-cart.css'
import {  useDispatch} from 'react-redux'
import { addItem ,removeItem,deleteItem} from '../../store/shopping-cart/CartSlice'

const CartItem = ({item}) => {

   const {id,title,image01,price,quantity,totalPrice}=item;
   const dispatch=useDispatch();

   const incrementItem =()=>{
       
      dispatch(addItem({
          id,
          title,
          image01,
          price
      }))
   }
   const decrementItem=()=>{
       
       dispatch(removeItem(id))
   }

   const deleteproduct=()=>{
       
      dispatch(deleteItem(id))
   }
  return (
     <ListGroupItem className='cart-item border-0 '>
          <div className='cart-item-info d-flex gap-3'>
              <img src={image01} alt="prd-img" />
              <div className='cart-product-info d-flex align-items-center justify-content-between gap-4 w-100'>
                   <div>
                   <h6 className='cart-item-title'>{title}</h6>
                   <p className='d-flex align-items-center gap-5 cart-item-price'>{quantity}x <span>${totalPrice}</span></p>
                   
                   <div className='d-flex align-items-center justify-content-between cart-counter-btn'>
                      <span className='increase-btn' onClick={incrementItem}><i class="ri-add-line"></i></span>
                      <span className='quantity'>{quantity}</span>
                      <span className='decrease-btn ' onClick={decrementItem}><i class="ri-subtract-line"></i></span>
                   </div>
                   </div>
              </div>
              <span className='delete-btn' onClick={deleteproduct}><i class="ri-close-line"></i></span>
          </div>
     </ListGroupItem>
  )
}

export default CartItem