import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import About from './components/layouts/About';
import Worktogether from './components/layouts/Worktogether';
import Carousel from './components/layouts/Carousel';
import Cards from './components/layouts/Cards';
import Milestones from './components/layouts/Milestones';
import Testimonials from './components/layouts/Testimonials';
import Haveideas from './components/layouts/Haveideas';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <About />
      <Worktogether />
      <Cards />
      <Milestones />
      <Testimonials />
      <Haveideas />
      <Footer />
      <Switch>
        <Route exact path='/children-privacy-statement' component='{About}' />
        <Route exact path='/linking-to-prodotype' component='{Register}' />
        <Route exact path='/cookie-statement' component='{Login}' />
      </Switch>
    </Router>
  );
}

export default App;
