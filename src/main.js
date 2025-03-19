import React from 'react'
import { Button, Carousel, Form, Input } from 'antd'
import game1 from './game1.jpg'
import game2 from './game2.jpg'
import game3 from './game3.jpg'
import './main.css'

function main() {
  return (
      <div className='container_main'>
        <Carousel autoplay className='caro_img'>
          <div>
            <img src={game1}></img>
          </div>
          <div>
            <img src={game2}></img>
          </div>
          <div>
            <img src={game3}></img>
          </div>
        </Carousel>
      </div>
  )
}

export default main