import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Task = ({ task }) => {

    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;
    const [project] = currentProject;

    const tasksContext = useContext(TaskContext);
    const { deleteTask, getProjectTasks } = tasksContext;

    const handleClick = id => {
        deleteTask(id);
        getProjectTasks(project.id);
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.status
                    ? <button className="completo" type="button">Completado</button>
                    : <button className="incompleto">Incompleto</button>
                }
            </div>
            <div className="acciones">
                <button className="btn btn-primario" type="button">Editar</button>
                <button
                    className="btn btn-secundario"
                    type="button"
                    onClick={() => handleClick(task.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );

}

export default Task;