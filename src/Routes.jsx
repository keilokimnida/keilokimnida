import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path = "/">
                    <Redirect to = "/home"/>
                </Route>
                <Route path = "/home" render ={() => <Home />}/>
            </Switch>
        </Router>
    )
}

export default Routes;