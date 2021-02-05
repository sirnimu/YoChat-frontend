import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from './pages/Login.js';
import Chatbox from './pages/Chatbox.js';
import Profile from './pages/Profile.js';

import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/chat/:chatId">
            <Chatbox />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
