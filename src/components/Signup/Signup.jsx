import React from 'react'

function Signup() {
  return (
    <div> <div className="form">
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
    <button type="text" className="submit">submit</button>
  </div></div>
  )
}

export default Signup