import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing'; 
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';



function App() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
        </Switch>
    );
}

export default App;
