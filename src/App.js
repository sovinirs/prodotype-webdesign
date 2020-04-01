import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/About';
import Contact from './components/pages/Contact';
import Terms from './components/pages/Terms';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/terms' component={Terms} />
      </Switch>
    </Router>
  );
}

export default App;
