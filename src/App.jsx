import React from 'react'
import './App.css';
import {Markdwnapp} from './components/markdwnapp'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Guide} from './components/Guide/guide'
import {Header} from './components/header/header'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
      </div>

      <Switch>
        <Route exact path="/guide">
          <Guide />
        </Route>
        <Route exact path="/">
          <Markdwnapp />
        </Route>
      </Switch>
    </Router>
  );
}

export {App};
