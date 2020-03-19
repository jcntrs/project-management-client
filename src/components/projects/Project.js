import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Project = ({ project }) => {

    const projectsContext = useContext(projectContext);
    const { getCurrentProject } = projectsContext;

    return (
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => getCurrentProject(project.id)}
            >
                {project.name}
            </button>
        </li>
    );

}

export default Project;