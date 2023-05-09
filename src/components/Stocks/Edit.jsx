import React, {useContext } from "react";
import "./edit.css";
import { useForm } from "react-hook-form";
import { StocksContext } from "../../Contexts/Stocks-context";
function Edit({ setEditModal, getId }) {
  const { getStocks } = useContext(StocksContext);
  const { register, handleSubmit } = useForm();
  let token = localStorage.getItem("token");

  
  async function onSubmit(data) {
    const res = await fetch(`/items/${getId}`, {

      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const items = await res.json();
    getStocks();
    setEditModal(false)
    console.log(items);
  }

  return (
    <div className="edit-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label>Item</label>
          <input type="text" {...register("name", {required: "Enter Name"})} />
          <label>Quantity</label>
          <input type="number" {...register("quantity", {required: "Enter Quantity"})} />
          <label>Price</label>
          <input type="number" {...register("price", {required: "Enter Price"})} />
          <div className="btn-wrapper">
            <button onClick={() => setEditModal(false)}>Exit</button>
            <button >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edit;
