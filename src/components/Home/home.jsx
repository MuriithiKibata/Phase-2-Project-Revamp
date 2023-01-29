import React from 'react'
import './home.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import NavBar from '../Navbar/nav.jsx' 
function home() {
    const percentage = 66;
  return (
    
    <div className='home-container'>
       
        <h1>HI Home</h1>
        <NavBar />
        <div className="welcome-text">
            <h2>Welcome Muriithi to Modulus Stocks Manager</h2>
        </div>
        <div className="tabs">
            <div className="sales">

            </div>
            <div className="stocks">
                
            </div>
        </div>
        <div className='circle'>
        <div className="text">
        <h2>Target: 100</h2>
        <h3>Sales Target Progress</h3>
        </div>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
            pathColor: "white",
            textColor: "white", 
            trailColor: '#0000CD',
            backgroundColor: '#3e98c7'
        })}/>;
        </div>
        
        </div>
  )
}

export default home