import React from 'react'
import logo from './logo.png'
import { Link } from 'react-router-dom'
import './dashboard.css'
import { Button } from 'antd'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Main from './main'
import Shop from './shop'

function dashboard() {
  function Logout() {
    localStorage.removeItem('logedin')
  }
  return (
    <div className='dashboard'>
      <div className='sidebar_content'>
        <img src={logo} id='logo' />
        <ul className='list'>
        <Link to='/main'><li> Home</li></Link>
          <Link to='/shop'><li>Our Shop</li></Link>
          <Link to='/about'><li> Product Details </li></Link>
          <Link to='/contact'><li> Contact Us</li></Link>
        </ul>
        <button onClick={Logout} className='btn'>Logout</button>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/main' element={<Main />}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </div>

  )
}

export default dashboard