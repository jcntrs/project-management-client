import React from 'react';
import Project from './Project';

const ProjectList = () => {

    const projects = [{ name: 'Tienda Virtual' }, { name: 'Intranet' }, { name: 'Diseño de sitio web' }];

    return (
        <ul className="listado-proyectos">
            {projects.map((project, index) => <Project key={index} project={project} />)}
        </ul>
    );

}

export default ProjectList;