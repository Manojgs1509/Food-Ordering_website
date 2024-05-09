import React, { useRef,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom'
import '../styles/header.css'

import { toggle } from '../../store/shopping-cart/CartUiSlice'



const Header = () => {

  const menuRef=useRef(null)
  const headerRef = useRef(null);
  const toggleMenu= ()=> menuRef.current.classList.toggle('show-menu');
  const totalQuantity=useSelector(state => state.cart.totalQuantity);

  const dispatch=useDispatch();

  const toggleShow=()=>{

      dispatch(toggle())
  }



  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => window.removeEventListener("scroll");
  // }, []);
    

  const nav_links = [
    {
      display: "Home",
      path: '/home'
    },
    {
      display: "Foods",
      path: '/foods'
    },
    {
      display: "Cart",
      path: '/cart'
    },
    {
      display: "Contact",
      path: '/contact'
    },

  ]

  return (
    <header className='header' >
      <Container>
        <div className='nav-wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* menu */}

          <div className='navigation' ref={menuRef} onClick={toggleMenu} >
            <div className='menu d-flex align-items-center gap-5'>
              {
                nav_links.map((item, index) => (

                  <NavLink className={navClass => navClass.isActive ? 'links active-link' : 'links'} to={item.path} key={index}>{item.display}</NavLink>
                ))
              }
            </div>
          </div>
          {/* nav-right-icon */}

          <div className='nav-right d-flex align-items-center gap-4'>
            <span className='cart-icon' onClick={toggleShow}>
              <i class="ri-shopping-cart-fill"></i>
              <span className='cart-badge'>{totalQuantity}</span>
            </span>
            <span className='user'>
              <Link className='links' to='/login'>
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span onClick={toggleMenu} className='mobile-menu'>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header