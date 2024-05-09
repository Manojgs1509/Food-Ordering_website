import React from 'react'
import Header from '../header/Header'
import Fotter from '../footer/Fotter'
import Routes from '../../routes/Routers'
import Carts from '../cart/Carts'
import { useSelector } from 'react-redux'

const Layout = () => {

  const showCart=useSelector((state) => state.cartUi.cartIsVisible)
  return (
    <div>
        <Header/>
        {showCart &&  <Carts/>}  
         <div>
         <Routes/>
         </div>
        <Fotter/>
    </div>
  )
}

export default Layout