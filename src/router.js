import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'

// import pages
import Home from './page/home/home'
import ProgrammingLogic from './pages/ProgrammingLogic/ProgrammingLogic'

export default function src(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ProgrammingLogic" exact component={ProgrammingLogic} />
       
      </Switch>
    </BrowserRouter>
  );
}
