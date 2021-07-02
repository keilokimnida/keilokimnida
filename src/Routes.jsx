import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <Redirect to = "/home"/>
                </Route>
                <Route path = "/home" render ={() => <Home />}/>
                <Route path = "/projects" render ={() => <Projects />}/>
            </Switch>
        </Router>
    )
}

export default Routes;