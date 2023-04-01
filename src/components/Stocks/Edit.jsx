import React from 'react'
import './edit.css'
function Edit({setEditModal}) {
  function handleClick(e){
   e.preventDefault() 
  }
  return (
    <div className='edit-wrapper'>
        <form className="form-wrapper"onClick={handleClick}>
        <div className="input-wrapper">
            <label>Item</label>
            <input type="text" />
            <label>Quantity</label>
            <input type="number" />
            <label>Price</label>
            <input type="number" />
            <div className="btn-wrapper">
                <button onClick={() => setEditModal(false)}>Exit</button>
                <button>Submit</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Edit