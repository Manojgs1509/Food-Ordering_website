import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import '../components/styles/checkout.css'

const Checkout = () => {
   const [entername,setEnterName]=useState('')
   const [enteremail,setEnterEmail]=useState('')
   const [enterphonenumber,setEnterPhonenumber]=useState('')
   const [entercountry,setEnterCountry]=useState('')
   const [entercity,setEnterCity]=useState('')
   const [enterpostCode,setEnterPostalCode]=useState('')
   const shippingInfo=[]
   const sumbitHandler= e =>{
       
    e.preventDefault()

    const shippingAddress={
        
        name:entername,
        email:enteremail,
        phoneNumber:enterphonenumber,
        country:entercountry,
        city:entercity,
        postcode:enterpostCode

    }
    shippingInfo.push(shippingAddress)
      
   }
  return (
      
       <Helmet title='Checkout'>

        <CommonSection title='Checkout'/>
         
         <section>
             <Container>
                <Row>
                   <Col lg='8' md='6'>
                      <h6 className='shipping-address'> Shipping Address</h6>
                       <form className='checkout-form' onSubmit={sumbitHandler}>
                          <div className='form-group'>
                              <input type="text" placeholder='Enter your name' required onChange={(e)=> setEnterName(e.target.value)}/>
                          </div>
                          <div className='form-group'>
                              <input type="email" placeholder='Enter your email' required onChange={(e)=> setEnterEmail(e.target.value)}/>
                          </div>
                          <div className='form-group'>
                              <input type="number" placeholder='Enter your phonenumber' required onChange={(e)=> setEnterPhonenumber(e.target.value)} />
                          </div>
                          <div className='form-group'>
                              <input type="text" placeholder='Enter your country' required onChange={(e)=> setEnterCountry(e.target.value)}/>
                          </div>
                          <div className='form-group'>
                              <input type="text" placeholder='Enter your city' required onChange={(e)=> setEnterCity(e.target.value)} />
                          </div>
                          <div className='form-group'>
                              <input type="number" placeholder='Enter your postalcode' required onChange={(e)=> setEnterPostalCode(e.target.value)}/>
                          </div>
                          <button type='submit' className='addcart-button'>Payment</button>
                       </form>
                       
                   </Col>
                   <Col>
                       <div className='checkout-bill'>
                          <h6 className='subtotal d-flex align-items-center justify-content-between mb-3'>Subtotal : <span>$34</span></h6>
                          <h6 className='Shipping Cost  d-flex align-items-center justify-content-between mb-3'>Shipping  : <span>$30</span></h6>
                          <div className='total'>
                              <h5 className=' d-flex align-items-center justify-content-between'>Total : <span>$80</span></h5>
                          </div>

                       </div>
                    </Col>
                </Row>
             </Container>
         </section>

       </Helmet>
  )
}

export default Checkout