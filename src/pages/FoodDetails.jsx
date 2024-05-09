import React, { useEffect, useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import '../components/styles/food-details.css'
import Products from '../assets/fake-data/products'
import products from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard/ProductCard'
import {  useDispatch } from 'react-redux'
import { addItem } from '../store/shopping-cart/CartSlice'


const FoodDetails = () => {

  const { id } = useParams();
  const [tab, seTab] = useState('desc')
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[reviewMsg,setReviewMsg]=useState('')
  const product = Products.find(item => item.id === id)
  const [previewImg, setPreviewImg] = useState(product.image01)
  const { title, price, category, desc,image01 } = product
  const relatedPrd=products.filter(item => category === item.category)
  const dispatch=useDispatch();

  const addProduct=()=>{
     
    dispatch(addItem({
       id,
       title,
       price,
       image01
    }))
  }

  const handleSubmit= e=>{
     e.preventDefault()
  }

  useEffect(()=>{
       setPreviewImg(product.image01)
  },[product])

  useEffect(()=>{
     
    window.scrollTo(0,0)
  },[product])


  return (
    <Helmet title='Product-Details'>
      <CommonSection title={title} />

      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
               <div className='product-images'>
               <div className='img-item mb-3' onClick={() => setPreviewImg(product.image01)}>
                <img src={product.image01} alt="" className='w-50' />
              </div>
              <div className='img-item mb-3' onClick={() => setPreviewImg(product.image02)} >
                <img src={product.image02} alt="" className='w-50' />
              </div>
              <div className='img-item' onClick={() => setPreviewImg(product.image03)}>
                <img src={product.image03} alt="" className='w-50' />
              </div>
               </div>
              
            </Col>
            <Col lg='4' md='4'>
              <div className='product-main-img'>
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='single-prd-content'>
                <h2 className='product-title '>{title}</h2>
                <span className='product-price mb-0'>Price : <span>${price}</span></span>
                <p className='category mb-5'>Category : <span>{category}</span></p>
                <button onClick={addProduct} className='addcart-button'>Add to cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-3'>
                <h6 className={`${tab === 'desc' ? 'tabs-active' : ' '}`} onClick={() => seTab('desc')}>Description</h6>
                <h6 className={`${tab === 'rev' ? 'tabs-active' : ' '}`} onClick={() => seTab('rev')}>Review</h6>
              </div>

              {
                tab === 'desc' ? <div className='tabs-content'><p>{desc}</p></div>
                  
                       :
                  <div className='form mb-3 '>
                    <div className='review pt-5'>
                      <p className='user-name mb-0'>John cena</p>
                      <p className='user-email mb-0'>johncena007@gmail.com</p>
                      <p className='review-text mt-1'>great Product</p>
                    </div>
                    <div className='review'>
                      <p className='user-name mb-0'>Mitchell</p>
                      <p className='user-email mb-0'>mitchellkumar@gmail.com</p>
                      <p className='review-text mt-1'>great Product</p>
                    </div>
                    <div className='review'>
                      <p className='user-name mb-0'>Lewis</p>
                      <p className='user-email mb-0'>lewishamilton@gmail.com</p>
                      <p className='review-text mt-1'>great Product</p>
                    </div>
                    <div className='review'>
                      <p className='user-name mb-0'>Virat kohli</p>
                      <p className='user-email mb-0'>viratkohli18@gmail.com</p>
                      <p className='review-text mt-1'>great Product</p>
                    </div>
                    <form className='tabs-form' onSubmit={handleSubmit}>
                      <div className='form-group'>
                        <input type="text" placeholder='Enter your name' onChange={(e)=> setName(e.target.value)} required/>
                      </div>
                      <div className='form-group'>
                        <input type="email" placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)} required/>
                      </div>
                      <div className='form-group'>
                        <textarea name="" id="" cols="30" rows="5" placeholder='Write your review' onChange={(e)=> setReviewMsg(e.target.value)} required></textarea>
                      </div>
                      <button type='submit' className='addcart-button'>Submit</button>
                    </form>
                  </div>
              }


            </Col> 
             <Col lg='12' className='mt-5'>
                 <h5 className='related-prd-title'>You might also like</h5>
             </Col>
             
                 {
                   relatedPrd.map((item)=>(
                    <Col lg='3' md='4' sm='6' xs='6' className='mb-3 mt-5'>
                    <ProductCard key={item.id} item={item}/>
                    </Col>
                   ))
                 }
             
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails