import React from 'react'
import './login.css'
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loading from '../Loading Animation/Loading'
function Login() {
  let navigate = useNavigate()
  const {register, handleSubmit} = useForm()
  const [loading, setLoading] = useState()
  const [userData, setUserData] = useState()
  const [errors, setErrors] = useState()

 async function onSubmit(data){
   
    const response = await fetch("/user_jwts",{
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    const info = await response.json()
    if (response.ok) {
      setLoading(true)
      setUserData(info)
      localStorage.setItem("token", info[1].jwt);
      setTimeout(() => {
        setLoading(false)
        navigate('/dashboard/home')
      }, 2000)
    } else {
      setErrors(info.errors)
    }
    
   
  }
  

  return (
    <div className="form-cont">
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <div className="title">Welcome</div>
    <div className="subtitle">Login</div>
    <div className="input-container ic1">
      <input id="firstname" className="input" type="text" placeholder=" "
      {...register("email")} />
      <div className="cut"></div>
      <label for="firstname" className="placeholder">Email</label>
    </div>
    <div className="input-container ic2">
      <input id="lastname" className="input" type="text" placeholder=" " 
      {...register("password")}/>
      <div className="cut"></div>
      <label for="lastname" className="placeholder">Password</label>
    </div>
    <button type="text" className="submit" >submit</button>
    <Link to="/signup">Don't have an account</Link>
  </form>
  {loading && <Loading/>}
  <ul className="error">
  
    <li>{errors}</li>
  
  </ul>
  </div>
  )
}

export default Login