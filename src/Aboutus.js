import React from 'react'
import { useLocation } from 'react-router-dom'

function Aboutus() {
     const location = useLocation()
      const info = location.product
  return (
    <div>
         <div>
          <img src={info.img}></img>
          <h3>{info.name}</h3>
          <p>{info.cat}</p>
        </div>
    </div>
  )
}

export default Aboutus