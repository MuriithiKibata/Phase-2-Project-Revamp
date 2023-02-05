import React from 'react'
import Reports from '../Reports/Reports'
import './stocks.css'
import NavBar from '../Navbar/nav'
function Stocks() {
  return (
    <div className='pri-cont'>
      <NavBar/>
      <Reports/>
        <div className="cont">
          <div className="headers"><h2>Item</h2></div>
          <div className="headers"><h2>Quantity</h2></div>
          <div className="headers"><h2>Price</h2></div>
          <div className="headers">
            <h2>Edit</h2>
            <h2>Cart</h2>
            <h2>Delete</h2>
          </div>
            
        </div>
        <div className="stock">
              <div><h2>Bread</h2></div>
              <div><h2>15pcs</h2></div>
              <div><h2>150/=</h2></div>
              <div className='controllers'>
                <button className="button">Edit</button>
                <button className="button">Cart</button>
                <button className="button">Delete</button>
              </div>
            </div>
        </div>

    // </div>
  )
}

export default Stocks