import React from "react";
import "./CreateStore.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
function CreateStore() {
  const token = localStorage.getItem("token");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  async function onSubmit(data) {
    const response = await fetch("/stores", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await response.json();
      localStorage.setItem("storeId", resData.id);
      navigate("/dashboard/home");
  }


  return (
    <div className="createStore">
      CreateStore
      <div className="create__store__cont">
        <form className="create__store__form" onSubmit={handleSubmit(onSubmit)}>
          <label>Enter Store Name</label>
          <input
            type="text"
            placeholder="Enter Store Name"
            {...register("name")}
          />
          <div className="btn__cont">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateStore;
