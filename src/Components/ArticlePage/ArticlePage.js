import React, { useState, useEffect } from 'react';

import './ArticlePage.css'

//import components

//import contexts
import { useArticlePageNavigation } from '../../Contexts/Components/ArticlePageNavigation/ArticlePageNavigationContext' 

export default function ArticlePage(props) {
  const { switchControllStylePageNavigation, setSwitchControllStylePageNavigation } = useArticlePageNavigation()
  const [stylePageNavigation ,setStylePageNavigation ] = useState("ArticlePageNavegation")
  const [stylePageNavigationTitle ,setStylePageNavigationTitle ] = useState({})
  const [styleOpenIcon, setStyleOpenIcon] = useState({})

  useEffect(()=>{
    if (switchControllStylePageNavigation){
      setStylePageNavigation("ArticlePageNavegationOpen")
      setStylePageNavigationTitle({
        fontSize: "2.16vmin",
        padding: "0.9vh 0vw"
      })
      setStyleOpenIcon({
        fontSize: "0vw",
        left: "-1vw"
      })
    }else{
      setStylePageNavigation("ArticlePageNavegation")
      setStylePageNavigationTitle()
      setStyleOpenIcon()
 
    }
  },[switchControllStylePageNavigation])



  function openPageNavigation(){
    if (!switchControllStylePageNavigation){
      setSwitchControllStylePageNavigation(true)
    }
  }
  function closePageNavigation(){
    if (switchControllStylePageNavigation){
      setSwitchControllStylePageNavigation(false)
    }
  } 


  return (
    <div className="ArticlePage">
      <div className={stylePageNavigation}  onMouseLeave={closePageNavigation} onClick={openPageNavigation}>
        <div className="ArticlePageNavegationTitle" style={stylePageNavigationTitle} onClick={closePageNavigation}>
          <span className="icon"> ⋘ </span> fechar Navegação por titulo 
        </div>
        <div className="ArticlePageNavegationHoverAnimation" style={styleOpenIcon}> ⋙ </div>
        <div className="ArticlePageNavegationHover" style={styleOpenIcon}> ⋙  </div>
        <div className="referenceArea">
          {props.title}
        </div>
      </div>
      <div className="ArticlePageContent">
        {props.children}
      </div>
    </div>
  );
}

 