import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import FoodDetails from '../pages/FoodDetails'
import Contact from '../pages/Contact'
import Checckout from '../pages/Checkout'


const Routers = () => {
  return (
      <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/foods' element={<AllFoods/>}/>
          <Route path='/foods/:id' element={<FoodDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/checkout' element={<Checckout/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
  )
}

export default Routers