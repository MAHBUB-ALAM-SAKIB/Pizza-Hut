import React from 'react'
import "./Menu.css"
import { MenuList } from '../../helpers/MenuList'
import MenuItem from '../../helpers/MenuItem'

function Menu() {
  // console.log(MenuItem)
  return (
    <div className='menu'>
        <h1 className="menuTitle">OUR MENU</h1>
        <div className="menuList">
            {MenuList.map((menuItem,key)=>{
             return (<MenuItem
             key={key}
             image={menuItem.image} 
             name={menuItem.name} 
             price={menuItem.price} />
             )
            })}
        </div>
    </div>
  )
}

export default Menu