import React, { useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { addTask } = tasksContext;

    const [task, setTask] = useState({ name: '' });
    const { name } = task;

    if (!currentProject) return null;
    const [project] = currentProject;

    const handleChange = event => {
        setTask({ ...task, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        task.projectId = project.id;
        task.status = false;
        addTask(task);
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
                                value="Agregar Tarea"
                            />
                        </div>
                    </form>
                </div>
            }
        </>
    );

}

export default TaskForm;