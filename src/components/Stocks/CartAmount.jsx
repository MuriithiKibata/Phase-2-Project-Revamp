import React, {useState} from "react";
import "./CartAmount.css";
import { Button } from "@mui/material";
function CartAmount({setCartAmountModal, getId}) {
    const authToken = localStorage.getItem("token");
    const [input, setInputData] = useState({
        id: getId,
        amount: ""
    })

    function addToCart() {
       
       fetch('/newcart',{
            method: 'POST',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input)
        })
        .then(handleDecrement())

    }

     function handleDecrement(){
      fetch(`/items/decrement/${getId}`,{
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })

        
    }

   async function handleSubmit(e){
        e.preventDefault();
       Promise.all([
        addToCart(), handleDecrement()
       ])
    }

  return (
    <div className="CartAmountWrapper">
      <form className="cartAmountForm" onSubmit={handleSubmit}>
        <label>Enter Amount</label>
        <input type="number" className="cartAmountInput" onChange={(e) => setInputData({...input, amount: e.target.value}) } />
        <div className="cartAmountButtons">
          <button onClick={() => setCartAmountModal(false)} >Close</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CartAmount;
