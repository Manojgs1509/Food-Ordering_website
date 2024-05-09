import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/productCard.css'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/shopping-cart/CartSlice'

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch=useDispatch();

  const addToCart =()=>{
       
       dispatch(addItem({
           id,
           title,
           image01,
           price
       }))
  }
  return (
    <div className='prdoduct-item'>
         <div className='product-img'>
             <img src={image01} alt="prd-img" className='w-50'/>
         </div>
         <div className='product-content'>
             <h5><Link className='links' to={`/foods/${id}`}>{title}</Link></h5>
         </div>
          <div className='d-flex align-items-center justify-content-between' >
             <span className='product-price'>${price}</span>
             <button className='addcart-button' onClick={addToCart}>Add to cart</button>
          </div>
    </div>
  )
}

export default ProductCard