import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading Animation/Loading";
import "./signup.css";

function Signup() {
  const { register, handleSubmit } = useForm();

        const [userData, setUserData] = useState();  
        const [errors, setErrors] = useState();
        let navigate = useNavigate();

  async function onSubmit(data) {
    setLoading(true);
    const response = await fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

   const info = await response.json();

    if (response.ok) {
      setTimeout(() => {
        setLoading(false);
        navigate("/dashboard/createstore");
      }, 2000);
      setUserData(info);
      localStorage.setItem("token", info[1].token);
      console.log(info[1].token);
    } else {
      setLoading(false);
      setErrors(info.errors);
    }
  }

 

  const [loading, setLoading] = useState();
  return (
    <div className="form-cont">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="title">Welcome</div>
        <div className="subtitle">Login</div>
        <div className="input-container ic1">
          <input
            id="firstname"
            className="input"
            type="text"
            placeholder=" "
            {...register("email")}
          />
          <div className="cut"></div>
          <label for="firstname" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="lastname"
            className="input"
            type="text"
            placeholder=" "
            {...register("password")}
          />
          <div className="cut"></div>
          <label for="lastname" className="placeholder">
            Password
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            {...register("password_confirmation")}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Confirm Password{" "}
          </label>
        </div>
        <button type="text" className="submit">
          submit
        </button>
      </form>
      {loading && <Loading />}
      <ul className="error">
        {errors && errors.map(item =>(
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Signup;
