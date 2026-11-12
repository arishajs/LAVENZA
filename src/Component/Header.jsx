import React from 'react'
import Logo from "../assets/Lavenza_Logo_Transparent.png"
import "../App.css"

const Header = () => {
  return (
    <>
    <img src={Logo} alt=""className='logo' />
   <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Shop</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Categories</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Deals</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Contact</a>
  </li>
</ul>
     </>
  )
}

export default Header