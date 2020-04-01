import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
