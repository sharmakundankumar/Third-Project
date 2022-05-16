import React from 'react'
import './App.css';

const index = () => {
  return (
    <>
      <nav className='navbar'>
          <ul className='navlist' >
              <div className='logo'><img src="/Images/logo.png" alt="" /></div>
          
              <li><a href="Home"><img src="/Icons/Home.png" alt="" /> Home</a></li>
              <li><a href="Products"> <img src="/Icons/Product.png" alt="" /> Products</a></li>
              <li><a href="Services"> <img src="/Icons/Service.png" alt="" /> Services</a></li>
              <li><a href="About"> <img src="/Icons/About.png" alt="" /> About</a></li>
              <li><a href="Contact"> <img src="/Icons/Contact.png" alt="" /> Contact</a></li>

          </ul>
          <div className="rightnav">
              <button className='btn btn-sm' >Search</button>
              <input type="text" name='search' id='search' placeholder='Search' />
          </div>
      </nav>
    </>
  )
}

export default index
