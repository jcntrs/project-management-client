import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/TaskState';

const App = () => {
    return (
        <ProjectState>
            <TaskState>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/nueva-cuenta" component={NewAccount} />
                        <Route exact path="/proyectos" component={Projects} />
                    </Switch>
                </BrowserRouter>
            </TaskState>
        </ProjectState>
    );
}

export default App;