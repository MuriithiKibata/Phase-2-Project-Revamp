import React from 'react'
import './nav.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
function Nav() {
  const navigate = useNavigate()
  return (
   
        <div className="container">
            <div className="items">
              {/* <Link to='/dashboard/sales'> 
                <h3>Sales</h3>
              </Link> */}
           
              <Link to='/dashboard/stocks'>
                <h3>Stocks</h3>
                </Link>
                <Link to='/dashboard/cart'>
                <h3>Cart</h3>
                </Link>
                <Link to='/dashboard/home'>
                <h3>Home</h3>
                </Link>
            </div> <div className="cartIcon"><Button variant='contained' size = 'small' color = 'secondary' onClick={() => 
            {
              navigate('/')
              window.localStorage.clear()
            }}>Logout</Button></div>
           
        </div>

  )
}

export default Nav