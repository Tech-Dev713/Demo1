import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()
  function send() {
    const Data = {id:1,name:'Dev'}
    navigate('/contact',{state:Data})
  }
  return (
    <div>
      <Button onClick={send}>Click</Button>
    </div>
  )
}

export default About