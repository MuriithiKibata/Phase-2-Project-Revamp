import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home/home';
import Sales from './components/Sales/Sales';
import Stocks from './components/Stocks/Stocks';
import Cards from './components/Home/Cards/Cards';

function App() {

    
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Home />}>
      <Route path='stocks' element={<Stocks/>}/>
      <Route path='sales' element={<Sales/>}/>
     <Route path='home' element={<Cards/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
