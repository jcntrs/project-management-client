import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NewAccount} />
                <Route exact path="/proyectos" component={Projects} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;