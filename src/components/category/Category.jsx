import React from 'react'

import categoryImg1 from '../../assets/images/category-01.png'
import categoryImg2 from '../../assets/images/category-02.png'
import categoryImg3 from '../../assets/images/category-03.png'
import categoryImg4 from '../../assets/images/category-04.png'
import {Container,Row,Col} from 'reactstrap'
import '../styles/category.css'


const Category = () => {

     const categoryData=[
        {
            display:'Fast Food',
            ImgUrl:categoryImg1
        },
        {
            display:'Pizza',
            ImgUrl:categoryImg2
        },
        {
            display:'Asian Food',
            ImgUrl:categoryImg3
        },
        {
            display:'Row Meat',
            ImgUrl:categoryImg4
        }
     ]
  return (
      <Container>
          <Row>
              {
                 categoryData.map((item,index)=>(
                     
                    <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                         <div key={index} className='category-item d-flex align-items-center gap-3'>
                              <div className='category-img'>
                                  <img src={item.ImgUrl} alt="category-img" />
                              </div>
                              <h6>{item.display}</h6>
                         </div>
                    </Col>
                 ))
              }
          </Row>
      </Container>
  )
}

export default Category