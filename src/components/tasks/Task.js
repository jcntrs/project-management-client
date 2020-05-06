import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const Task = ({ task }) => {

    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;
    const [project] = currentProject;

    const tasksContext = useContext(TaskContext);
    const { deleteTask, getProjectTasks, updateTask, saveCurrentTask } = tasksContext;

    const handleClick = id => {
        deleteTask(id, project._id);
        getProjectTasks(project.id);
    }

    const changeStatus = task => {
        task.status === true ? task.status = false : task.status = true;
        updateTask(task);
    }

    const selectTask = task => {
        saveCurrentTask(task);
    }

    return (
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.status
                    ? <button className="completo" type="button" onClick={() => changeStatus(task)}>Completado</button>
                    : <button className="incompleto" onClick={() => changeStatus(task)}>Incompleto</button>
                }
            </div>
            <div className="acciones">
                <button className="btn btn-primario" type="button" onClick={() => selectTask(task)}>Editar</button>
                <button
                    className="btn btn-secundario"
                    type="button"
                    onClick={() => handleClick(task._id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );

}

export default Task;