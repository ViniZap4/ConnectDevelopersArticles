import React from 'react';


import './LogoTipo.css'

//import components
import Logo from '../Logo/Logo'

//import context 
import {useMenuBar} from '../../Contexts/Components/MenuBarContext/MenuBarContext'

function openConnectDevelopers() {
  window.location.assign("/")
}

function LogoTipo(props) {
  return (
    <div className="LogoTipo" onClick={openConnectDevelopers} title="ConnectDevelopers">
      <Logo />
      <Text 
        first="C"
        content="onnect"
      />
      <Text 
        first="D"
        content="evelopers"
      />
      
    </div>
  );
}

function Text(props){
  const {styleLogoTipo}  = useMenuBar()

  return(<>
    <span className="LogoTipoAnimateFistWord"
      style={styleLogoTipo.first}
    >{props.first}</span>
    <span className="LogoTipoAnimateContent"
      style={styleLogoTipo.content}
    >{props.content}</span>
  </>)
}

export default LogoTipo;