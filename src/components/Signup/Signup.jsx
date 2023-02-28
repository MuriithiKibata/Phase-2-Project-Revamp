import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading Animation/Loading'
import './signup.css'
function Signup() {
  let navigate = useNavigate()
  function handleClick(e){
    e.preventDefault()
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
      navigate('/dashboard/home')
    },2000)
  }
  const [loading, setLoading] = useState()
  return (
    <form className="form-cont">
     <form className="form">
    <div className="title">Welcome</div>
    <div className="subtitle">Login</div>
    <div className="input-container ic1">
      <input id="firstname" className="input" type="text" placeholder=" " />
      <div className="cut"></div>
      <label for="firstname" className="placeholder">Email</label>
    </div>
    <div className="input-container ic2">
      <input id="lastname" className="input" type="text" placeholder=" " />
      <div className="cut"></div>
      <label for="lastname" className="placeholder">Password</label>
    </div>
    <div className="input-container ic2">
      <input id="email" className="input" type="text" placeholder=" " />
      <div className="cut cut-short"></div>
      <label for="email" className="placeholder">Confirm Password </label>
    </div>
    <button type="text" className="submit" onClick={handleClick}>submit</button>
  </form>
  {loading && <Loading/>}
  </form>
  )
}

export default Signup