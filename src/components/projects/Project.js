import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Project = ({ project }) => {

    const projectsContext = useContext(projectContext);
    const { getCurrentProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { getProjectTasks } = tasksContext;

    const handleClick = proyectId => {
        getCurrentProject(proyectId);
        getProjectTasks(proyectId);
    }

    return (
        <li>
            <button
                className="btn btn-blank"
                type="button"
                onClick={() => handleClick(project.id)}
            >
                {project.name}
            </button>
        </li>
    );

}

export default Project;