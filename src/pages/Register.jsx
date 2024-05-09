import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../components/styles/login.css'

const Register = () => {
  const signNameRef=useRef()
  const signEmailRef=useRef()
  const signpassRef=useRef()
  return (
      
    <Helmet title='Login'>
         <CommonSection title='Login'/>
          <section>
              <Container>
                  <Row>
                      <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                         <form action="" className='form mb-5 m-auto'>
                         <div className='form-group'>
                                <input type="text" placeholder='Full Name' required ref={signNameRef}/>
                            </div>
                            <div className='form-group'>
                                <input type="text" placeholder='Email' required ref={signEmailRef}/>
                            </div>
                            <div className='form-group'>
                                <input type="password" placeholder='Password' required ref={signpassRef}/>
                            </div>
                            <button type='submit' className='addcart-button'>Sign Up</button>
                         </form>
                         <Link to='/login' className='links'>Don't have an account ? Login</Link>
                      </Col>
                  </Row>
              </Container>
          </section>
     </Helmet>
  )
}

export default Register