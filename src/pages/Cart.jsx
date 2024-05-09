import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import {  useSelector,useDispatch } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import '../components/styles/cart-page.css'
import { deleteItem } from '../store/shopping-cart/CartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    
  const cartItems=useSelector(state => state.cart.cartItems)
  const totalCost=useSelector(state => state.cart.totalAmount)
 
  return (
     <Helmet title='Cart'>
        <CommonSection title='Your Cart'/>
         <section>
            <Container>
               <Row>
                  <Col lg='12'>
                         {
                           cartItems.length === 0 ? <h6 className='text-center'>Your cart is empty</h6> :
                            
                           <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Title</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                     <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   cartItems.map((item)=> (
                                       
                                        <Tr item={item} key={item.id}/>
                                   ))
                                }
                            </tbody>
                        </table>
                         }
                          <div className='mt-4'>
                              <h6 className='cart-subtotal'>Subtotal : <span>${totalCost}</span></h6>
                              <p>Taxes and shipping will calculate at checkout</p>
                              <div className='cart-button'>
                                  <button className="addcart-button me-3"><Link className='links' to='/foods'>Continue Shopping</Link></button>
                                  <button className="addcart-button"><Link className='links' to='/checkout'>Checkout</Link></button>

                              </div>
                          </div>
                    </Col>
               </Row>
            </Container>
         </section>
     </Helmet>
  )
}

const Tr= props => {

  const {id,image01,title,price,quantity}=props.item
  const dispatch=useDispatch();

  const deleteCartItem = ()=>{
      
    dispatch(
       deleteItem(id)
    )
  }

  return  <tr>
       <td className='text-center cart-img-box'><img src={image01} alt="" /></td>
       <td className='text-center'>{title}</td>
       <td className='text-center'>${price}</td>
       <td className='text-center'>{quantity} px</td>
       <td onClick={deleteCartItem} className='text-center delete-cart'><i class="ri-delete-bin-line"></i></td>

  </tr>
}

export default Cart