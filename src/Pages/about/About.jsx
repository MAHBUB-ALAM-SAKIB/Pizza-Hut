import React from 'react'
import Multipple from "../../assets/multipplePizza.jpg"
import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage : `url(${Multipple})`}}></div>
      <div className="aboutBottom">
        <h1>ABOUT Us</h1>
        <p>Welcome to <b>PIZZA HUT</b>, where passion for pizza and a commitment to quality come together to create an extraordinary dining experience. Since our inception, we've been dedicated to crafting the perfect pizza for every palate, using only the finest ingredients and time-honored techniques.</p>
      </div>
    </div>
  )
}

export default About