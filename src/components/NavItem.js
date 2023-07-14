import React, { useState } from 'react';

function NavItem(props) {

  const handleNewMenuClick = (e)=>{
    e.preventDefault();
    const newActiveMenu = {id:e.target.id,name:e.target.text, active:true}
    props.handleClick(newActiveMenu);
  }

  return props.items.map((item,i)=>(
    <li key = {item.id}>
      <a 
        id={item.id}
        className={item.active?'activeItem':''} 
        href='' 
        onClick={handleNewMenuClick}>
          {item.name}
        </a>
    </li>
  ));
}

export default NavItem;
