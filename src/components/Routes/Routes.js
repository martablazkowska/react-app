import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import HomePage from "../HomePage/HomePage";
import LoginPage from "../LoginPage/LoginPage";
import NoMatch from "../NoMatch/NoMatch";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route component={NoMatch}/>
    </Switch>
  )
}
