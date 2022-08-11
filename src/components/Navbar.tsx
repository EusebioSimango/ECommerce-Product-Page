import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import Cart from '../assets/icon-cart.svg'
import Avatar from '../assets/image-avatar.png'
import CartManager from './CartManager'
import {  cartItem } from './CartAddManager'
import { Popover } from "@headlessui/react"



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
    <Popover className="right">
      <Popover.Panel>
        <CartManager />
      </Popover.Panel>
      <Popover.Button className="cart">
        <img src={Cart} alt="Cart Icon" />
      </Popover.Button>
      <Popover.Button className="profile">
        <img src={Avatar} alt="User's Avatar"/>
      </Popover.Button>
      
    </Popover>
  </header>
  )
}

export default Navbar