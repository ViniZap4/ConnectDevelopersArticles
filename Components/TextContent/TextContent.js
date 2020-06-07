import React from 'react'

import './TextContent.css'

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
    <h3 className="TextContent">
      {props.children}
    </h3>
  )
}

// -------------  link reference text

export function LinkReference(props){
  return(
    <a href={`#${props.title}`} className="LinkReferenceText" >
      <span>➤</span> {props.children}
    </a>
  )
}
