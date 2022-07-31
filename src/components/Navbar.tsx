import React from 'react'
import Cart from "../assets/icon-cart.svg"
import Avatar from "../assets/image-avatar.png"
import Logo from "../assets/logo.svg"

const Navbar: React.FC = () => {
  return (
  <header className='container'>
    <div className="left">
      <a className='logo' href="./"> 
        <img src={Logo}/>
      </a>
      <nav>
        <ul>
          <li><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li><a className="active" href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="right">
      <div className="cart">
        <img alt="Cart Icon" src={Cart}/>
      </div>
      <div className="profile">
        <img alt="Avatar" src={Avatar}/>
        
      </div>
    </div>
  </header>
  )
}

export default Navbar