import React from 'react'
import Logo from '../assets/logo.svg'
import Cart from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'


// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
  <header className='container'>
    <div className="left">
      <a className='logo' href="/">
        <img src={Logo} alt="Sneakers's Logo" />
      </a>
      <nav>
        <ul>
          <li ><a href="#">Collections</a></li>
          <li><a href="#">Men</a></li>
          <li className="active"><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div className="right">
      <div className="cart">
        <img src={Cart} alt="Cart Icon" />
      </div>
      <div className="profile">
        <img src={Avatar} alt="User's Avatar"/>
      </div>
    </div>
  </header>
  )
}

export default Navbar