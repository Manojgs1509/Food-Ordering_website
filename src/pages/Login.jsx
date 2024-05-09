import React, { useRef } from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/common-section/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../components/styles/login.css'


const Login = () => {
  const loginEmailRef=useRef()
  const loginpassRef=useRef()
  return (
     <Helmet title='Login'>
         <CommonSection title='Login'/>
          <section>
              <Container>
                  <Row>
                      <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                         <form action="" className='form mb-5 m-auto'>
                            <div className='form-group'>
                                <input type="text" placeholder='Email' required ref={loginEmailRef}/>
                            </div>
                            <div className='form-group'>
                                <input type="password" placeholder='Password' required ref={loginpassRef}/>
                            </div>
                            <button type='submit' className='addcart-button'>Login</button>
                         </form>
                         <Link to='/register' className='links'>Already have an account ? create an account</Link>
                      </Col>
                  </Row>
              </Container>
          </section>
     </Helmet>
  )
}

export default Login