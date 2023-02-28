import React from 'react'
import './edit.css'
function Edit() {
  return (
    <div className='edit-wrapper'>
        <form className="form-wrapper">
        <div className="input-wrapper">
            <label>Item</label>
            <input type="text" />
            <label>Quantity</label>
            <input type="number" />
            <label>Price</label>
            <input type="number" />
            <div className="btn-wrapper">
                <button>Exit</button>
                <button>Submit</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Edit