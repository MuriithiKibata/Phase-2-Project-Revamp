import React, {useState, useContext} from "react";
import { StocksContext } from '../../Contexts/Stocks-context'
import "./CartAmount.css";
function CartAmount({setCartAmountModal, getId}) {
    const authToken = localStorage.getItem("token");
    const [input, setInputData] = useState({
        id: getId,
        amount: ""
    })

    const {getStocks, stocks} = useContext(StocksContext)

    function closeModal() {
      setCartAmountModal(false)
    }

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
        addToCart(), handleDecrement(), closeModal(), getStocks()])
    }

  return (
    <div className="CartAmountWrapper">
      <form className="cartAmountForm" onSubmit={handleSubmit}>
        <label>Enter Amount</label>
        <input type="number" className="cartAmountInput" onChange={(e) => setInputData({...input, amount: e.target.value}) } />
        <div className="cartAmountButtons">
          <button onClick={closeModal} >Close</button>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CartAmount;
