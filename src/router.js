import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//import pages
import Home from './page/home/home'

export default function src(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact path={Home} />
      </Switch>
    </BrowserRouter>
  );
}
 