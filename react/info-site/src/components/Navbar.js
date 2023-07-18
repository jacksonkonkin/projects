import React from 'react'
import Icon from '../assets/reactjs-icon.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <img src={Icon} alt='logo' />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar