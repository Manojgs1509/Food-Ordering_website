import React from 'react'
import { Container } from 'reactstrap'
import '../styles/All-foods.css'

const CommonSection = (props) => {
  return (
      <section className='common-section'>
         <Container>
              <h2 className='text-white'>{props.title}</h2>
         </Container>
      </section>
  )
}

export default CommonSection