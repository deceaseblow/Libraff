import React from 'react'
import { Link } from 'react-router-dom'
import LogoPicture from '../assets/logo.png'
function Logo() {
  return (
    <div>
    <Link to="/">
        <img src={LogoPicture} alt="Libraff Logo" style={{width: '150px'}}/>
    </Link>
    </div>
  )
}

export default Logo
