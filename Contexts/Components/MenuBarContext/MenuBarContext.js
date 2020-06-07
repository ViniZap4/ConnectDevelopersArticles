import React, { createContext, useState, useContext } from 'react'

import { styleMenuBarDefault, styleLogoDefault, styleLogoTipoDefault, ItemLinkMenuDefault } from './ContentStyles'


const MenuBarContext = createContext()


export default function MenuBarProvider(props){
  const [ styleMenuBar, setStyleMenuBar ] = useState(styleMenuBarDefault)
  const [ positionMenu, setPositionMenu ] = useState()
  const [ styleLogo, setStyleLogo ] = useState(styleLogoDefault)
  const [ styleLogoTipo, setStyleLogoTipo ] = useState(styleLogoTipoDefault)
  const [ itemLinkMenu, setItemLinkMenu ] = useState(ItemLinkMenuDefault) 

  return(
    <MenuBarContext.Provider
      value={{
        styleMenuBar,
        setStyleMenuBar,
        positionMenu,
        setPositionMenu,
        styleLogo,
        setStyleLogo,
        styleLogoTipo,
        setStyleLogoTipo,
        itemLinkMenu,
        setItemLinkMenu
        
      }}
    >
      {props.children}
    </MenuBarContext.Provider>
  )
}

export function useMenuBar(){
  const context = useContext(MenuBarContext)
  if (!context) throw console.error(" inside in your Provider ") 
  
  const {
    styleMenuBar,
    setStyleMenuBar,
    positionMenu,
    setPositionMenu,
    styleLogo,
    setStyleLogo,
    styleLogoTipo,
    setStyleLogoTipo,
    itemLinkMenu,
    setItemLinkMenu
  } = context
  return {
    styleMenuBar,
    setStyleMenuBar, 
    positionMenu,
    setPositionMenu,
    styleLogo,
    setStyleLogo,
    styleLogoTipo,
    setStyleLogoTipo,
    itemLinkMenu,
    setItemLinkMenu
  }
}