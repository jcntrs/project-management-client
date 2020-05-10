import React, { useContext } from 'react';
import AuthContext from '../../context/authentication/AuthContext';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Header = () => {

    const authContext = useContext(AuthContext);
    const { user, signOff } = authContext;

    const projecstContext = useContext(projectContext);
    const { resetProjectState } = projecstContext;

    const taskContext = useContext(TaskContext)
    const { resetTaskState } = taskContext;

    const closeUserSession = () => {
        signOff();
        resetProjectState();
        resetTaskState();
    }

    return (
        <header className="app-header">
            <p className="nombre-usuario">{user && <span>Hola {user.name}</span>}</p>
            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion" onClick={closeUserSession}>Cerrar Sesión</button>
            </nav>
        </header>
    );

}

export default Header;