import React from 'react'
import './header.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

function header() {
  return (
    <div className='header_content'>
      <img src={logo} id='header_logo' />
      <ul className='header_list'>
      <Link to='/main'><li>Home</li></Link>
        <Link to='/shop'><li>Our Shop</li></Link>
        <Link to='/about'><li> Product Details </li></Link>
        <Link to='/contact'><li> Contact Us</li></Link>
      </ul>
      <Link to='/login'><button className='btn0'>Sign In</button></Link>
    </div>
  )
}

export default header