import React from 'react'


import './cards.css'
import Nav from '../../Navbar/nav';
import text from '../text.svg'
import { useNavigate } from 'react-router-dom';
function Cards() {
   
  const navigate = useNavigate() 
  return (
    
    <div className='home-container'>
        <Nav/>
        <img src={text} alt="text" />
        <div className="btn">
        <button onClick={()=>navigate('/dashboard/stocks')}>Stocks</button>
        <button onClick={()=> navigate('/dashboard/sales')}>Sales</button>
        </div>
        </div>
  )
}
 

export default Cards