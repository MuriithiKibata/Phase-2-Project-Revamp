import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Reports from '../Reports/Reports'
import './stocks.css'
import NavBar from '../Navbar/nav'
import Edit from './Edit'
import {DataGrid} from '@mui/x-data-grid'
import { StocksContext } from '../../Contexts/Stocks-context'
import { Button } from '@mui/material'
import CartAmount from './CartAmount'
import Create from './Create'
function Stocks() {
  const [editModal, setEditModal] = useState(false)
  const [getId, setId] = useState()
  const [openCartAmountModal, setCartAmountModal] = useState(false)
  const [openCreateModal, setOpenCreateModal] = useState(false)
  const {getStocks, stocks, handleDelete} = useContext(StocksContext)

  const renderDetailsButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={() =>{
                  setEditModal(true)
                }}
             
            >
                Edit
            </Button>
        </strong>
    )
}

function renderCartButton(){
  return (
    <strong>
      <Button
      variant="contained"
      size="small"
      color="secondary"
      onClick={() =>{
        setCartAmountModal(true)
      }}
      >
      Cart
      </Button>
    </strong>
  )
}

function renderDeleteButton(){
  return (
    <strong>
      <Button
      variant="contained"
      color="secondary"
      size="small"
      onClick={() => {handleDelete(getId)}}
      >
        Delete
      </Button>
    </strong>
  )
}

  

  const colums = [
    {field: 'id', headerName: 'ID', width: 200},
    {field: 'name', headerName: 'Name', width: 200},
    {field: 'price', headerName: 'Price', width: 200},
    {field: 'quantity', headerName: 'Quantity', width: 200},
    {field: "Edit",
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
  },
  {field: "Cart",
    renderCell: renderCartButton,
    disableClickEventBubbling: true,
  },
  {field: "Delete",
    renderCell: renderDeleteButton,
    disableClickEventBubbling: true,
  },

  ];

  
  useEffect(() =>{
    getStocks()
  }, [])

 
  
  

  console.log(stocks)
  

  return (
    <div className='pri-cont'>
      
      <NavBar/>
      <Reports setOpenCreateModal =  {setOpenCreateModal}/>
     
           <div className="cont">
           
          <DataGrid rows = {stocks} columns = {colums} autoHeight  onRowClick={(rows)=> 
            {setId(rows.id)
            localStorage.setItem("itemId", rows.id)
          }}/>

        </div>
         {openCreateModal && <Create setOpenCreateModal = {setOpenCreateModal}/>}
        {editModal && <Edit setEditModal={setEditModal} getId ={getId}/>}
        {openCartAmountModal && <CartAmount setCartAmountModal = {setCartAmountModal} getId = {getId}/>}
     </div>
  )
}

export default Stocks