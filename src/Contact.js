import React from 'react'
import { useLocation } from 'react-router-dom'

function Contact() {
  const location = useLocation()
  const info = location.state
  return (
    <div>
      <p>{info.id}</p>
      <p>{info.name}</p>
    </div>
  )
}

export default Contact