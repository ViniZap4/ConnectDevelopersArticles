import React, { createContext, useState ,useContext } from 'react'

const ArticlePageNavigation = createContext()

export default function ArticlePageNavigationProvider(props){
  const [switchControllStylePageNavigation,setSwitchControllStylePageNavigation ] = useState(false)

  return(
    <ArticlePageNavigation.Provider value={{
      switchControllStylePageNavigation,
      setSwitchControllStylePageNavigation
    }}>
      {props.children}
    </ArticlePageNavigation.Provider>
  )
}

export function useArticlePageNavigation(){
  const context = useContext(ArticlePageNavigation)
  if (!context) throw console.error("inside in your Provider")

  const {
    switchControllStylePageNavigation,
    setSwitchControllStylePageNavigation
  } = context

  return{
    switchControllStylePageNavigation,
    setSwitchControllStylePageNavigation
  }
}