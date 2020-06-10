import React from 'react';

import './Logo.css'

import LogoIcon from '../../imagens/icons/logo/connectDev.png'

//import Context
import {useMenuBar} from '../../Contexts/Components/MenuBarContext/MenuBarContext'

export default function Logo(props) {
  const { styleLogo } = useMenuBar()



  return (
    <div className="Logo" style={styleLogo}>
      <span 
        className="LogoIcon"
        style={{backgroundImage: `url("${LogoIcon}") `,}}>
      </span>
    </div>
    
  );
}

 