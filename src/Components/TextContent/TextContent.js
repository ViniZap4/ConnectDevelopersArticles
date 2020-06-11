import React, { useState, useEffect } from 'react'

import './TextContent.css'

//import contexts
import { useArticlePageNavigation } from '../../Contexts/Components/ArticlePageNavigation/ArticlePageNavigationContext'


export function Title(props){
  return(
    <h1 className="TitleContent" id={props.title} style={props.style}>
      {props.children}
    </h1>
  )
}

export function SubTitle(props){
  return(
    <h3 className="SubTitleContent" id={props.title} >
      {props.children}
    </h3>
  )
}


export function Text(props){
  return(
    <p className="TextContent" style={{marginLeft:props.spacing}}>
      {props.children}
    </p>
  )
}

// -------------  link reference text

export function LinkReference(props){
  const { switchControllStylePageNavigation,setSwitchControllStylePageNavigation } = useArticlePageNavigation()
  const [styleLink, setstyleLink] = useState({})
  const [styleIcon, setStyleIcon] = useState({})

  useEffect(()=>{
    if(switchControllStylePageNavigation){
      setstyleLink({
        fontSize: "2.16vmin",
        margin: "0.6vmin 0.6vw",
        padding: "0.6vmin 0.6vmin",
        
      })
   
    }else{
      setstyleLink()
      setStyleIcon()
    }
  },[switchControllStylePageNavigation])

  function closePageNavigation(){
    setSwitchControllStylePageNavigation(false)
  }
 
  return(
    <a href={`#${props.title}`} 
      onClick={closePageNavigation}
      style={styleLink} 
      className="LinkReferenceText"  
    >
      <span style={styleIcon}>➤</span> {props.children}
    </a>
  )
}
