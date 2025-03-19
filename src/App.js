import React from 'react'
import About from './About'
import Contact from './Contact'
import Main from './main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './register'
import Login from './login'
import Dashboard from './dashboard'
import Header from './header'
import Shop from './shop'
import Aboutus from './Aboutus'
import Header1 from './header1'

function App() {
  
  return (
      localStorage.getItem("logedin")?
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
      :
      <BrowserRouter>
      {/* <Header/> */}
      <Header1/>
        <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/aboutus' element={<Aboutus/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App