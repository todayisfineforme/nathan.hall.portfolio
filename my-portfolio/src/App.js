import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing'; 
import Projects from './components/projects';
import Resume from './components/resume';
import Stuff from './components/other_stuff';



function App() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/stuff' component={Stuff} />
        </Switch>
    );
}

export default App;
