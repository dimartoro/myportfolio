import React, { useState } from 'react';
import NavItem from './NavItem';

function NavigationSection(props) {

  const [items,setItems] = useState([
    {id:1,name:'About me', active:true}
    ,{id:2,name:'Portfolio', active:false}
    ,{id:3,name:'Contact me', active:false}
    ,{id:4,name:'Resume', active:false}
  ]);

  const handleMenuChange = (newActiveItem)=>{
    var newItems = [...items];
    for(var x = 0; x<newItems.length; x++){
      if(newItems[x].id == newActiveItem.id){
        newItems[x].active = true;
      }else{
        newItems[x].active = false;
      }
    }
    setItems(newItems);
    props.activeMenu(newActiveItem.name);
  };

  return( 
    <div>
      <ul>
        <NavItem handleClick={handleMenuChange} items={items}/>
    </ul>
  </div>
  );
}

export default NavigationSection;
