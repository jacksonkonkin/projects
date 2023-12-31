import React from 'react'
import './main.css'
import Img from '../assets/Group.png'

const Main = () => {
  return (
    <div className='container'>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img className='logo' src={Img} alt='react logo' />
    </div>
  )
}

export default Main