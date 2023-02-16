import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
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
    <button type="text" className="submit">submit</button>
    <Link to="/signup">Don't have an account</Link>
  </form>
  )
}

export default Login