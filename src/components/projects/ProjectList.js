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
            {projects.map(element => <Project key={element.id} project={element} />)}
        </ul>
    );

}

export default ProjectList;