import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ProjectList = () => {

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    return (
        <ul className="listado-proyectos">
            {projects.length > 0 ?
                <TransitionGroup>
                    {projects.map(element =>
                        <CSSTransition
                            key={element.id}
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