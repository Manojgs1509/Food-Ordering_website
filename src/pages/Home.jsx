import React, { useState,useEffect } from 'react'

import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap'

import heroImg from '../assets/images/hero.png'

import '../components/styles/hero-section.css'

import { Link } from 'react-router-dom'

import Category from '../components/category/Category'

import '../components/styles/home.css'

import featureImg1 from '../assets/images/service-01.png'
import featureImg2 from '../assets/images/service-02.png'
import featureImg3 from '../assets/images/service-03.png'

import foodCategoryImg1 from '../assets/images/hamburger.png'
import foodCategoryImg2 from '../assets/images/pizza.png'
import foodCategoryImg3 from '../assets/images/bread.png'

import ProductCard from '../components/ProductCard/ProductCard'

import products from '../assets/fake-data/products'

import whyImg from '../assets/images/location.png'

import networkImg from '../assets/images/network.png'

import TestimonialSlider from '../components/slider/TestimonialSlider'

const featureData = [
   {
      display: 'Quick Delivery',
      imgUrl: featureImg1,
      desc: 'Lorem ipsum dolor sit amet consectetur adip, elit. Laborum, reprehenderit!'
   },
   {
      display: 'Super Dine In',
      imgUrl: featureImg2,
      desc: 'Lorem ipsum dolor sit amet consectetur, adip elit. Laborum, reprehenderit!'
   },
   {
      display: 'Easy Pick Up',
      imgUrl: featureImg3,
      desc: 'Lorem ipsum dolor sit amet consectetur, adip  elit. Laborum, reprehenderit!'
   }
]
const Home = () => {
  
   const [category,setCategory]=useState("ALL")
   const [allProducts,setAllProducts]=useState(products)
   const [hotPizza,setHotPizza]=useState([])

   useEffect(()=>{
        const filteredPizza=products.filter((item) => item.category === 'Pizza')
        const slicePizza=filteredPizza.slice(0,4);
        setHotPizza(slicePizza)
   },[])

  
    useEffect(() => {
      if (category === "ALL") {
        setAllProducts(products);
      }
  
      if (category === "BURGER") {
        const filteredProducts = products.filter(
          (item) => item.category === "Burger"
        );
  
        setAllProducts(filteredProducts);
      }
  
      if (category === "PIZZA") {
        const filteredProducts = products.filter(
          (item) => item.category === "Pizza"
        );
  
        setAllProducts(filteredProducts);
      }
  
      if (category === "BREAD") {
        const filteredProducts = products.filter(
          (item) => item.category === "Bread"
        );
  
        setAllProducts(filteredProducts);
      }
    }, [category]);
   

  
   return (
      <Helmet title='Home'>
         <section>
            <Container>
               <Row>
                  <Col lg='6' md='6'>
                     <div className='hero-content'>
                        <h5 className='mb-3'>Easy way to make an order</h5>
                        <h1 className='mb-4 hero-title'><span>HUNGRY ?</span> Just wait <br /> food at<span> your door</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium, rerum inventore impedit labore quod!</p>
                        <div className='hero-btns d-flex align-items-center gap-5 mt-5'>
                           <button className='order-btn d-flex align-items-center justify-content-between'>Order now <i class="ri-arrow-right-s-line pt-1"></i></button>
                           <button className='all-food-btn '><Link className='links' to='/foods'>See all foods</Link></button>
                        </div>
                        <div className='hero-service d-flex align-items-center gap-5 mt-5'>
                           <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i class="ri-car-line"></i></span>{" "}No shipping charge</p>
                           <p className='d-flex align-items-center gap-2'><span className='shipping-icon'><i class="ri-shield-check-line"></i></span>{" "}100% secure checkout</p>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6' md='6' >
                     <div className='hero-img'>
                        <img src={heroImg} alt="hero" className='w-100' />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         <section className='pt-0'>
            <Category />
         </section>

         <section>
            <Container>
               <Row>
                  <Col lg='12' className='text-center'>
                     <h5 className='feature-subtitle mb-4'>What we serve</h5>
                     <h2 className='feature-title'>Just sit back at home</h2>
                     <h2 className='feature-title'>We will <span>take care</span></h2>
                     <p className='feature-text mt-4 mb-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, neque!</p>
                     <p className='feature-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat.</p>
                  </Col>
               </Row>
            </Container>
         </section>

         <section>
            <Container>
               <Row>
                  {
                     featureData.map((item, index) => (
                        <Col lg='4' md='6' xs='6' key={index} className=''>
                           <div className='feature-item text-center px-5 py-3'>
                              <img className='w-25 mb-3' src={item.imgUrl} alt="feature-img" />
                              <h5 className='fw-bold mb-3'>{item.display}</h5>
                              <p>{item.desc}</p>
                           </div>
                        </Col>
                     ))
                  }
               </Row>
            </Container>
         </section>

         <section>
            <Container>
               <Row>
                  <Col lg='12' className='text-center'>
                     <h2 className='food-category-title'>Product Foods</h2>
                  </Col>
                  <Col lg='12'>
                     <div className='food-category d-flex align-items-center justify-content-center gap-5'>
                        <button className={`${category === 'ALL' ? 'foodactive' : ''}`} onClick={()=> setCategory("ALL")}>All</button>
                        <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodactive' : '' }`}  onClick={()=> setCategory("BURGER")}><img src={foodCategoryImg1} alt="hamburger" />Burger</button>
                        <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodactive' : '' }`}  onClick={()=> setCategory("PIZZA")}><img src={foodCategoryImg2} alt="pizza" />Pizza</button>
                        <button  className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodactive' : '' }`} onClick={()=> setCategory("BREAD")} ><img src={foodCategoryImg3} alt="bread" />Bread</button>
                     </div>
                  </Col>

                  {
                     allProducts.map((item) => (

                        <Col lg='3' md='4' sm='6' xs='6' className='mt-4'>
                           <ProductCard key={item.id} item={item}/>
                        </Col>
                     ))
                  }

               </Row>
            </Container>
         </section>

           <section className='why-choose'>
               <Container>
                   <Row>
                       <Col lg='6' md='6'>
                            <img src={whyImg} alt="location-img" className='w-100'/>
                       </Col>
                       <Col lg='6' md='6'>
                           <div className='tasty-treat'>
                                <h2 className='tasty-treat-title'>Why <span>Tasty Treat?</span> </h2>
                                <p className='tasty-treat-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis sint nam commodi alias qui consequatur harum a voluptate quis iste quae magnam nemo, vel quidem, laboriosam illum aliquid cumque.</p>
                                 <ListGroup className='mt-4'>
                                      <ListGroupItem className='border-0 ps-0'>
                                           <p className='choose-use-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Fresh And Tasty Foods</p>
                                           <p className='choose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.</p>
                                      </ListGroupItem>
                                      <ListGroupItem className='border-0 ps-0'>
                                           <p className='choose-use-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Quality Support</p>
                                           <p className='choose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.</p>
                                      </ListGroupItem>
                                      <ListGroupItem className='border-0 ps-0'>
                                           <p className='choose-use-title d-flex align-items-center gap-2'><i class="ri-checkbox-circle-line"></i> Order From Any Location</p>
                                           <p className='choose-use-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, cupiditate.</p>
                                      </ListGroupItem>
                                 </ListGroup>
                           </div>
                       </Col>
                   </Row>
               </Container>
           </section>
            
            <section className='pt-0 mt-0'>
                 <Container>
                    <Row>
                       <Col lg='12' className='mb-5'>
                           <h2 className='text-center food-category-title'>Hot Pizza</h2>
                       </Col>
                        {
                            hotPizza.map((item)=>(
                                <Col lg='3' md='4' key={item.id}>
                                    <ProductCard item={item}/>
                                </Col>
                            ))
                        }
                    </Row>
                 </Container>
            </section>

            <section>
                 <Container>
                    <Row>
                       <Col lg='6' md='6'>
                            <div className='testimonial'>
                                <h5 className='testimonial-subtitle mb-4'>Testimonial</h5>
                                <h2 className='testimonial-title mb-4'>What our <span>customers</span> are saying</h2>
                                <p className='testimonial-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolorum commodi excepturi iste officiis! Repellendus dolorem ipsum error illum quaerat?</p>
                                <TestimonialSlider/>
                            </div>
                       </Col>
                       <Col lg='6' md='6'>
                          <img src={networkImg} alt="network-img"  className='w-100'/>
                       </Col>
                    </Row>
                 </Container>
            </section>
      </Helmet>
   )
}

export default Home