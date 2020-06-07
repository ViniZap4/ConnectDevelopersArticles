import React, {useState } from 'react'

import './CreatePage.css'

//import components
import MenuBar from '../MenuBar/MenuBar'
import ResizeObserver from 'react-resize-observer'

//import contexts
import {useMenuBar} from '../../Contexts/Components/MenuBarContext/MenuBarContext'
import {
  styleMenuBarDefault,
  styleMenuBarInScroll, 
  styleLogoDefault, 
  styleLogoInScroll,
  styleLogoTipoDefault,
  styleLogoTipoInScroll,
  ItemLinkMenuDefault,
  ItemLinkMenuInScroll
} from '../../Contexts/Components/MenuBarContext/ContentStyles' 
import MenuBarProvider from '../../Contexts/Components/MenuBarContext/MenuBarContext'


function PageContent(props) {
  
    const { 
      setStyleMenuBar , 
      setPositionMenu, 
      setStyleLogo, 
      setStyleLogoTipo,
      setItemLinkMenu
    } = useMenuBar()
    const [menuTopValue, setMenuTopValue] = useState()


  
  function scrollEvent() {
    setPositionMenu(<>
      <ResizeObserver 
         onPosition={(rect) => {
           setMenuTopValue(parseInt(rect.top))
         }}
       />
    </>)
    if(menuTopValue > 1) {
     setStyleMenuBar( styleMenuBarDefault)
     setStyleLogo(styleLogoDefault)
     setStyleLogoTipo(styleLogoTipoDefault)
     setItemLinkMenu(ItemLinkMenuDefault)
    }else {
     setStyleMenuBar( styleMenuBarInScroll )
     setStyleLogo(styleLogoInScroll)
     setStyleLogoTipo(styleLogoTipoInScroll)
     setItemLinkMenu(ItemLinkMenuInScroll)
    }

  }

  return (
    <div className="Page" id={props.name} onScroll={scrollEvent}> 
      <MenuBar />
      {props.children}
    </div>
  );
  
}


export default function CreatePage(props){
  return(
    <MenuBarProvider>
      <PageContent name={props.name}>
        {props.children}
      </PageContent>
    </MenuBarProvider>
  )
}