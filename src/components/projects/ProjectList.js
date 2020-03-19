import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';

const ProjectList = () => {

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <ul className="listado-proyectos">
            {projects.length > 0
                ? projects.map(element => <Project key={element.id} project={element} />)
                : <p>No hay proyectos, comienza creando uno.</p>
            }
        </ul>
    );

}

export default ProjectList;