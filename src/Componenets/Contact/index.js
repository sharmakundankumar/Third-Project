import React from 'react'
import "./App.css";

const index = () => {
  return (
    <>
      <div className="Contact">
          <h1>
              Contact Us
          </h1>
          <div className="form">
              <input type="text" name='text' id='Name' placeholder='Name' />
              <input type="number" name="number" id="number" placeholder='Number' />
              <input type="email" name="email" id="email" placeholder='Email' />
              <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
              <button>Submit</button>

          </div>
      </div>
    </>
  )
}

export default index
