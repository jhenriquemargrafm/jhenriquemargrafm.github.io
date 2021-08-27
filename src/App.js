import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Experiences from './pages/Experiences';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/experiences" component={Experiences} />
        <Route exact path="/" component={ About } />
      </Switch>    
    </div>
  );
}

export default App;
