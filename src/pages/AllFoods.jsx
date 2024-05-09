import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import '../components/styles/All-foods.css'
import { Container, Row, Col } from 'reactstrap'
import Products from '../assets/fake-data/products'
import ProductCard from '../components/ProductCard/ProductCard'
import ReactPaginate from 'react-paginate'
import products from '../assets/fake-data/products'

const AllFoods = () => {

  const [searchItem, setSeachItem] = useState('')
  const [pageNumber, setPageNumber] = useState(0)
  const productPerPage = 8
  const vistiedPage = pageNumber * productPerPage
  const searchProducts = Products.filter(item => {
    if (searchItem.value === '') return item
    if (item.title.toLowerCase().includes(searchItem.toLowerCase())) return item;
  })
  const displayPage = searchProducts.slice(vistiedPage, vistiedPage + productPerPage)
  const pageCount = Math.ceil(Products.length / productPerPage);

  const changePage = ({ selected }) => {

    setPageNumber(selected)
  }
  return (
    <Helmet title='All-Foods'>
      <CommonSection title='All Foods' />
      <section>
        <Container>
          <Row>
            <Col lg='6' sm='6' md='6' xs='12'>
              <div className='search-widget  d-flex align-items-center justify-content-between'>
                <input type="text" placeholder="I'm looking for" value={searchItem} onChange={e => setSeachItem(e.target.value)} />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
            <Col lg='6' sm='6' md='6' xs='12'>
              <div className='sorting-widget text-end '>
                <select name="" id="">
                  <option value="">Default</option>
                  <option value="ascending">Alpahbetically, A-Z</option>
                  <option value="descending">Alpahbetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Pricce</option>
                </select>
              </div>
            </Col>
            {

              displayPage.map((item, index) => (
                <Col lg='3' md='4' sm='6' xs='6' key={index} className='mb-3 mt-5'>
                  <ProductCard item={item} />
                </Col>

              ))
            }

            <div>
              <ReactPaginate

                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel={"prev"}
                nextLabel={"Next"}
                containerClassName='paginate-btn'

              />
            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods