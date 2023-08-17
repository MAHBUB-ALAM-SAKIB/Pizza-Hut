import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import background from "../../assets/pizza3.jpeg"

function Home() {
  return (
   <div className="home" style={{backgroundImage : `url(${background})`}}>
    <div className="headerContainer" >
      <h1>PizzaHut</h1>
      <p>Best In the town</p>
      <Link to="/menu">
      <button>ORDER NOW</button>
      </Link>
      
    </div>
   </div>
  )
}

export default Home