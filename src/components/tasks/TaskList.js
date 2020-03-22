import React, { useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskList = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject, deleteProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { projectTasks } = tasksContext;

    if (!currentProject) return <h2>Selecciona un proyecto</h2>;

    const [project] = currentProject;

    const handleClick = () => {
        deleteProject(project.id);
    }

    return (
        <>
            <h2>Proyecto: {project.name}</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : projectTasks.map((element, index) => <Task key={index} task={element} />)
                }
            </ul>
            <div className="center">
                <button className="btn btn-danger" type="button" onClick={handleClick}>Eliminar Proyecto</button>
            </div>
        </>
    );
}

export default TaskList;