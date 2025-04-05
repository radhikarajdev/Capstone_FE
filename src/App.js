import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Eventdetails from './components/Eventdetails';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/events/:id' >
          <Eventdetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
