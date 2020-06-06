import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



//import pages
import Home from './pages/home/Home'
import ProgrammingLogic from './pages/ProgrammingLogic/ProgrammingLogic'
import Help from './pages/Help/Help'

export default function src(){
  return(<>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ProgrammingLogic" exact component={ProgrammingLogic} />
        <Route path="/help" exact component={Help} />
      </Switch>
    </BrowserRouter>
  </>);
}