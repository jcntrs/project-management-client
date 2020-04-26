import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/TaskState';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/authentication/AuthState';

const App = () => (
    <ProjectState>
        <TaskState>
            <AlertState>
                <AuthState>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route exact path="/nueva-cuenta" component={NewAccount} />
                            <Route exact path="/proyectos" component={Projects} />
                        </Switch>
                    </BrowserRouter>
                </AuthState>
            </AlertState>
        </TaskState>
    </ProjectState>
);


export default App;