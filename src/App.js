import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import AboutUs from './components/pages/About';
import Contact from './components/pages/Contact';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Cookie from './components/pages/Cookie';
import Export from './components/pages/Export';
import Participants from './components/pages/Participants';
import Termsofuse from './components/pages/Termsofuse';
import Consent from './components/pages/Consent';
import Childrenprivacy from './components/pages/Childrenprivacy';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={AboutUs} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/terms' component={Terms} />
        <Route exact path='/privacy' component={Privacy} />
        <Route exact path='/cookie' component={Cookie} />
        <Route exact path='/export' component={Export} />
        <Route exact path='/participants' component={Participants} />
        <Route exact path='/termsofuse' component={Termsofuse} />
        <Route exact path='/consent' component={Consent} />
        <Route exact path='/childrenprivacy' component={Childrenprivacy} />
      </Switch>
    </Router>
  );
}

export default App;
