import React from 'react'
import Logo from '../../assets/logo.jpg'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';

const Navbar = () => {

  const[openLinks,setOpenLinks]=useState(false)
  const toggleNavbar=()=>{
    setOpenLinks(!openLinks)

  }

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open":"close"}>
        <img src={Logo}/>
        <div className="hiddenLinks">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/contactUs">Contact Us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/aboutUs">About Us</Link>
        <Link to="/contactUs">Contact Us</Link>
        <button onClick={()=>{toggleNavbar()}}>
        <ReorderIcon/>
        </button>
       
      </div>
    </div>
  )
}

export default Navbar