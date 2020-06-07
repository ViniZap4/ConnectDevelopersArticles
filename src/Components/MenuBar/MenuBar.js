import React from 'react';


import './Menubar.css'


//import components
import ItemLinkMenu from './ItemLinkMenu/ItemLinkMenu'
import LogoTipo from '../../Components/LogoTipo/LogoTipo'

//import contexts
import {useMenuBar} from '../../Contexts/Components/MenuBarContext/MenuBarContext'

export default function MenuBar(props) {
  const { styleMenuBar,  positionMenu} = useMenuBar()

  return (
    <div className="MenuBar" style={styleMenuBar}>
      {positionMenu}
      <div className="areaLogo">
      <LogoTipo />
      </div>
      <ul>

        <ItemLinkMenu href="/" title="Inicio" >
          Home
        </ItemLinkMenu>
        <ItemLinkMenu href="ProgrammingLogic" title="Lógica de programação" >
          Lógica de programação
        </ItemLinkMenu>
        <ItemLinkMenu href="#" title="Programação Orientado a Objeto" >
          POO
        </ItemLinkMenu>
        <ItemLinkMenu href="#" title="Aprendendo Java" >
          Introdução a java
        </ItemLinkMenu>
        <ItemLinkMenu href="#" title="ConnectDevelopres, quem somos?" >
          Sobre ConnectDevelopers
        </ItemLinkMenu>
        <ItemLinkMenu href="#" title="Quer ajuda?" >
          Ajuda
        </ItemLinkMenu>


      </ul>

    </div>
  );
}

 