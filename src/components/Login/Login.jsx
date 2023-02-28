import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Loading from '../Loading Animation/Loading'
function Login() {
  let navigate = useNavigate()

  const [loading, setLoading] = useState()

  function handleClick(e){
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/dashboard/home')
    }, 2000)
  }
  return (
    <div className="form-cont">
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
    <button type="text" className="submit" onClick={handleClick}>submit</button>
    <Link to="/signup">Don't have an account</Link>
  </form>
  {loading && <Loading/>}
  </div>
  )
}

export default Login