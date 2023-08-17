import React from 'react'
// import "../Pages/menu/Menu.css"
import "./MenuItem.css"

function MenuItem({image,price,name}) {
  return (
    <div className='menuItem'>
        {/* <div style={{backgroundImage : `url(${image})`}}></div> */}
        <div className="image">

        <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <p>{price}</p>
    </div>
  )
}

export default MenuItem 