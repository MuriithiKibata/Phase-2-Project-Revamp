import React from 'react'
// import {DataGrid} from '@mui/x-data-grid'
import "./index.css"
import Nav from '../Navbar/nav'
function Sales() {

  // const columns = [
  //   {field: 'id', headerName: 'ID', width: 300},
  //   {field: 'date', headerName: 'Date', width: 300},
  //   {field: 'amount', headerName: 'Amount', width: 300}
  // ]

  // const rows = [{
  //   id: 1, date: new Date, amount: 10000},
  //   {id: 2, date: new Date, amount: 200}, 
  // ]

  return (
    <div className=' pri-cont sales-container' >
      <Nav/>
      <div className="table-container">
   {/* <DataGrid columns={columns} autoHeight rows = {rows} sx={{borderRadius: 4}}/> */}
   <div className="total"><h1>Total: 10200</h1></div>
   </div>
    </div>
  )
}

export default Sales