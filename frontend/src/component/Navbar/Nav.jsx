import React, { useState } from 'react'
import './Nav.css'
import { assets } from '../../assets/asset'
const Nav = () => {
const [check ,setCheck] = useState(true);
  return (
    <div className='nav'>
      <div className="logo">
        <img src={assets.logoLight} className='logo-img' alt="" />
      </div>
      <ul className="ul">
        <a className='sm:block hidden' href='/'>Home</a>
        <a className='sm:block hidden' href='#blog'>About Me</a>
        <a className='sm:block hidden' href='#contact'>Contact</a>
        <img  className='j hidden'  src={ check ? assets.burger : assets.cross }   alt="" />
      </ul>

    </div>
  )
}

export default Nav
