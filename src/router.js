import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'

// import pages
import Home from './page/home/Home'
import ProgrammingLogic from './page/ProgrammingLogic/ProgrammingLogic'
import POO from './page/POO/POO'
import IntroductionJava from './page/IntroductionJava/IntroductionJava'
import AboutConnecDevelopers from './page/AboutConnecDevelopers/AboutConnecDevelopers'
import Help from './page/Help/Help'


export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/ProgrammingLogic" exact component={ProgrammingLogic} />
        <Route path="/POO" exact component={POO} />
        <Route path="/IntroductionJava" exact component={IntroductionJava} />
        <Route path="/AboutConnecDevelopers" exact component={AboutConnecDevelopers} />
        <Route path="/Help" exact component={Help} />


      </Switch>
    </BrowserRouter>
  );
}
