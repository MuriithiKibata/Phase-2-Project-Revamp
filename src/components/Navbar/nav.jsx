import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
function nav() {
  return (
   
        <div className="container">
            <div className="items">
              <Link to='/sales'> 
                <h3>Sales</h3>
              </Link>
              <Link to='/stocks'>
                <h3>Stocks</h3>
                </Link>
                <Link to='/cart'>
                <h3>Cart</h3>
                </Link>
                <Link to='/home'>
                <h3>Home</h3>
                </Link>
            </div>
        </div>

  )
}

export default nav