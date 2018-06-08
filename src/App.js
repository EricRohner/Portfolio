// https://build-rmpwbfdtkn.now.sh/
import React from 'react';
import "./App.css"
import "./ComponentStyle.css"
import Splash from './Splash/Splash';
import Contact from './Contact/Contact';
import Education from './Education/Education'
import WorkHistory from './WorkHistory/WorkHistory'
import About from './About/About'
import Cat from './Cat/Cat'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Splash}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/education" component={Education}/>
            <Route path="/workhistory" component={WorkHistory}/>
            <Route path="/about" component={About}/>
            <Route path="/cat" component={Cat}/>
        </Switch>
    </BrowserRouter>
)