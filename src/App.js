
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from './components/main';
import Admin from './components/admin/admin';
import Login from './components/admin/login';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
          <Main/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
