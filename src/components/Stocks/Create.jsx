import React, { useContext, useState } from "react";
import "./create.css";
import { StocksContext } from "../../Contexts/Stocks-context";
function Create({ setOpenCreateModal, storeId}) {
  let authToken = localStorage.getItem("token");
  const {getStocks} = useContext(StocksContext)

  const [inputState, setInputState] = useState({
    name: "",
    quantity: 1,
    price: 1,
    store_id: storeId,
  });

  function handleChange(e) {
    setInputState((inputState) => ({
      ...inputState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("/items", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputState),
    });
    const data = await res.json();
    closeModal()
    getStocks()
  }

  function closeModal(){
    setOpenCreateModal(false);
  }

  return (
    <div className="create-wrapper">
      <form className="create-form-wrapper" onSubmit={handleSubmit}>
        <div className="create-input-wrapper">
          <label>Item</label>
          <input type="text" name="name" onChange={handleChange} />
          <label>Quantity</label>
          <input type="number" name="quantity" onChange={handleChange} />
          <label>Price</label>
          <input type="number" name="price" onChange={handleChange} />
          <div className="create-btn-wrapper">
            <button onClick={closeModal}>Exit</button>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
