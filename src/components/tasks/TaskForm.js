import React, { useState, useEffect, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { currentTask, errorTask, getProjectTasks, addTask, validateTask, updateTask, cleanTask } = tasksContext;

    const [task, setTask] = useState({ name: '' });
    const { name } = task;

    useEffect(() => {
        currentTask && setTask(currentTask);
    }, [currentTask]);

    if (!currentProject) return null;
    const [project] = currentProject;

    const handleChange = event => {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (currentTask === null) {
            if (name.trim() === '') {
                validateTask();
            } else {
                task.projectId = project.id;
                task.status = false;
                addTask(task);
            }
        } else {
            updateTask(task);
            cleanTask();
        }
        getProjectTasks(project.id);
        setTask({ name: '' });
    }

    return (
        <>
            {currentProject &&
                <div className="formulario">
                    <form onSubmit={handleSubmit}>
                        <div className="contenedor-input">
                            <input
                                className="input-text"
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Nombre de tarea"
                            />
                        </div>
                        <div className="contenedor-input">
                            <input
                                className="btn btn-primario btn-submit btn-block"
                                type="submit"
                                value={currentTask ? 'Editar Tarea' : 'Agregar Tarea'}
                            />
                        </div>
                    </form>
                    {errorTask && <p className="mensaje error">El nombre de la tarea es obligatorio.</p>}
                </div>
            }
        </>
    );

}

export default TaskForm;