import React, { useState, useEffect } from 'react';


//import styles
import './ItemLinkMenu.css'

//import context
import {useMenuBar} from '../../../Contexts/Components/MenuBarContext/MenuBarContext'

export default function ItemLinkMenu(props) {
  const [ styeleItemMenu, setStyeleItemMenu ] = useState({})
  const { itemLinkMenu } = useMenuBar() 
  
  const [styleAElement, setStyleAElement] = useState(itemLinkMenu.a)

  function hoverStyle(controllSwitch){
    if (controllSwitch) {
      setStyeleItemMenu(itemLinkMenu.hover)
      setStyleAElement({color:"#fff"})
    }else{ 
      setStyeleItemMenu({})
      setStyleAElement(itemLinkMenu.a)

    } 
  }

  useEffect(() => {
    setStyleAElement(itemLinkMenu.a)
  },[itemLinkMenu])

  return (
      <li 
        className="ItemLinkMenu" 
        title={props.title} 
        style={styeleItemMenu}
        onMouseMove={() => hoverStyle(true)}
        onMouseOut={ () => hoverStyle(false)}  
      > 
        <a href={props.href} style={styleAElement}>
          {props.children}
        </a>
      </li>
  );
}

 