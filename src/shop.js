import React, { useState } from 'react'
import './shop.css'
import game1 from './game01.jpg'
import game2 from './game02.jpg'
import game3 from './game03.jpg'
import game4 from './game04.jpg'
import game5 from './game05.jpg'
import game6 from './game06.jpg'
import game7 from './game07.jpg'
import game8 from './game08.jpg'
import game9 from './game09.jpg'
import game10 from './game10.jpg'
import game11 from './game11.jpg'
import game12 from './game12.jpg'
import game13 from './game13.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import Aboutus from './Aboutus'
 

function Shop() {
  const navigate = useNavigate()
  // const[myproduct,setProduct]=useState({})

    const Data=[
        {id:1,name:'Pubg',cat:'MCA',img:game1},
        {id:2,name:'Dota 2',cat:'MA',img:game2},
        {id:3,name:'Apex',cat:'MSC',img:game3},
        {id:4,name:'Super People',cat:'BA',img:game4},
        {id:5,name:'Warframe',cat:'BSC',img:game5},
        {id:6,name:'Tower of fantasy',cat:'BCA',img:game6},
        {id:7,name:'Lostark',cat:'BCA',img:game7},
        {id:8,name:'Destiny V2',cat:'BCA',img:game8}, 
        {id:9,name:'The Sims4',cat:'BCA',img:game9},
        {id:10,name:'Prince of persia',cat:'BCA',img:game10},
        {id:11,name:'Call of Duty MW',cat:'BCA',img:game11},
        {id:12,name:'Brawlhalla',cat:'BCA',img:game12},
        {id:13,name:'Warframe',cat:'BCA',img:game13},
    ]
    function category(product){
      // setProduct(product)
      navigate('/Aboutus',{state:product})
    }
  return (
    <div>
      <div className='head_title'>
        <h1>Our Shop</h1>
      </div>
        <div className='shop_container'>
        {Data.map(i=>(
            <div className='small_cont'>
            <img src={i.img}/>
            <h3>{i.name}</h3>
            <p>{i.cat}</p>
            {/* <button>View More</button> */}
            <Button onClick={()=>category(i)}>View More</Button>
            </div>
        ))}
        </div>
        {/* <div>
          <img src={myproduct.img}></img>
          <h3>{myproduct.name}</h3>
          <p>{myproduct.cat}</p>
        </div> */}
    </div>
  )
}

export default Shop
