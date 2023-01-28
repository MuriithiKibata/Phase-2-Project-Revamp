import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home/home';
import Sales from './components/Sales/sales';
import Stocks from './components/Stocks/stocks';

function App() {

    
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='stocks' element={<Stocks/>}/>
      <Route path='sales' element={<Sales/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
