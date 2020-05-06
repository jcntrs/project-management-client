import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../../context/alerts/AlertContext';

const ProjectList = () => {

    const projectsContext = useContext(projectContext);
    const { projects, message, getProjects } = projectsContext;

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    useEffect(() => {
        message && showAlert(message.msg, message.category);
        getProjects();
        // eslint-disable-next-line
    }, [message]);

    return (
        <ul className="listado-proyectos">
            {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
            {projects.length > 0 ?
                <TransitionGroup>
                    {projects.map(element =>
                        <CSSTransition
                            key={element._id}
                            classNames="proyecto"
                            timeout={200}
                        >
                            <Project project={element} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
                :
                <p>No hay proyectos, comienza creando uno.</p>
            }
        </ul>
    );

}

export default ProjectList;