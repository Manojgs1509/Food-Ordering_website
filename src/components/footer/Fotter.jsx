import React from 'react'
import { Container, Row, Col ,ListGroup,ListGroupItem} from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import {Link} from 'react-router-dom'
import '../styles/footer.css'

const Fotter = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='4' sm='6'>
            <div className='logo footer-logo text-start'>
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel error perspiciatis repellat sequi vero .</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
              <h5 className='footer-title'>Delivery Time</h5>
               <ListGroup className='delivery-time-list '>
                   <ListGroupItem className='delivery-time-item border-0 ps-0'>
                       <span>Monday - Thursday</span>
                       <p>10.00 am  - 11.00 pm</p>
                   </ListGroupItem>
                   <ListGroupItem className='delivery-time-item border-0 ps-0'>
                       <span>Friday - Sunday</span>
                       <p>Off day</p>
                   </ListGroupItem>
               </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5 className='footer-title'>Contact</h5>
               <ListGroup className='delivery-time-list '>
                   <ListGroupItem className='delivery-time-item border-0 ps-0'>
                       <p className='address'>Location : 12A, 94 Meghdoot Nehru Place New Delhi South Delhi DL IN 110019.</p>
                   </ListGroupItem>
                   <ListGroupItem className='delivery-time-item border-0 ps-0'>
                       <span>Phone No: 9798998766</span>
                   </ListGroupItem>
                   <ListGroupItem className='delivery-time-item border-0 ps-0'>
                       <span>Email : tastytreat@gmail.com</span>
                   </ListGroupItem>
               </ListGroup>
          </Col>
          <Col lg='3' md='4' sm='6'>
          <h5 className='footer-title'>Newsletter</h5>
          <p>Subscribe out newsletter</p>
            <div className='newsletter'>
                <input type="email" placeholder='Enter your email' />
                <span>
                <i class="ri-send-plane-fill"></i>
                </span>
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
           <Col lg='6' md='6'>
               <p className='copyright-text '>@Copyright - 2024 , website made by Manoj.All Rights Reserved.</p>
           </Col>
           <Col  lg='6' md='6'>
              <div className='social-links d-flex align-items-center justify-content-end gap-4'>
                 <p className='m-0'>Follow :</p>
                 <span><Link className='links' to='/'><i class="ri-facebook-line"></i></Link></span>
                 <span><Link className='links'  to='/'><i class="ri-instagram-line"></i></Link></span>
                 <span><Link className='links' to='/'><i class="ri-linkedin-line"></i></Link></span>
                 <span><Link className='links' to='/'><i class="ri-github-line"></i></Link></span>
              </div>
           </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Fotter