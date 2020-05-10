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
                className="btn btn-blank green-color"
                type="button"
                onClick={() => handleClick(project._id)}
            >
                <b><i className="fas fa-tasks"></i>&nbsp;&nbsp;&nbsp;{project.name}</b>
            </button>
        </li>
    );

}

export default Project;