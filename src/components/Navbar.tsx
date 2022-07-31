import React from 'react'

// import { Container } from './styles';

const Navbar: React.FC = () => {
  return (
  <header className='container'>
    <div className="left">
      <a className='logo'>sneakers </a>
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
      <div className="cart">Ca</div>
      <div className="profile">A</div>
    </div>
  </header>
  )
}

export default Navbar