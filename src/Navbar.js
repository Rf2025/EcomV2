
// import { useState } from 'react'
// import {Link} from 'react-router-dom'
import React from 'react';
import navCSS from './Nav.module.css'
import logo from '/Users/ricardofeliz/Desktop/ecomv2/src/silogo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



function Navbar(){
    return(
<header>
<nav className={navCSS.navbar}>
    <div className={navCSS.logoContainer} alt='everything-si-logo'>
  <a href="/home">  <img src={logo}  className={navCSS.logoImg}/></a>
    </div>
    <ul>
<li><a className={navCSS.navLinks} href="/">Home</a></li>
<li><a className={navCSS.navLinks} href="/products">Products</a></li>
<li><a className={navCSS.navLinks} href="/contact">Contact</a></li>
    </ul>
<button className={navCSS.menuBtn}><FontAwesomeIcon icon={faBars}   alt="menu-icon"/></button>
  </nav>
</header>
    )
}



export default Navbar;