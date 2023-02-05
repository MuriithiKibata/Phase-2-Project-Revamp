import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import './cards.css'
import Nav from '../../Navbar/nav';
import text from '../text.svg'
import { useNavigate } from 'react-router-dom';
function Cards() {
    const percentage = 66;
    const navigate = useNavigate() 
  return (
    
    <div className='home-container'>
        <Nav/>
        <img src={text} alt="text" />
        <div className="btn">
        <button onClick={()=>navigate('/stocks')}>Stocks</button>
        <button onClick={()=> navigate('/sales')}>Sales</button>
        </div>
        </div>
  )
}
 

export default Cards