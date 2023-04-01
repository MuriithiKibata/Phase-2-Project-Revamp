import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Reports from '../Reports/Reports'
import './stocks.css'
import NavBar from '../Navbar/nav'
import Edit from './Edit'
import { StocksContext } from '../../Contexts/Stocks-context'
function Stocks() {
  const [editModal, setEditModal] = useState(false)

  const {getStocks, setStocks, stocks} = useContext(StocksContext)

  useEffect(() =>{
    getStocks()
  }, [])

  console.log(stocks)
  

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
          {/* {errors && errors.map(item =>(
          <li>{item}</li>
        ))} */}
        </div>
        {stocks && stocks.map((item) =>(
        <div className="stock">
          
       
              <div><h2>{item.name}</h2></div>
              <div><h2>{item.quantity}</h2></div>
              <div><h2>{item.price}</h2></div>
              
              <div className='controllers'>
                <button className="button" onClick={()=> setEditModal(true)}>Edit</button>
                <button className="button">Cart</button>
                <button className="button">Delete</button>
              </div>
              
            </div>
))}
            
           {editModal && <Edit setEditModal={setEditModal}/>}
        </div>

    // </div>
  )
}

export default Stocks