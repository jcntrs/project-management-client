import React, { useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TaskList = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject, deleteProject } = projectsContext;

    if (!currentProject) return <h2>Selecciona un proyecto</h2>;

    const [project] = currentProject;

    const tasks = [
        { id: 1, name: 'Estudiar React JS', status: true },
        { id: 2, name: 'Estudiar Node JS', status: false }
    ];

    const handleClick = () => {
        deleteProject(project.id);
    }

    return (
        <>
            <h2>Proyecto: {project.name}</h2>
            <ul className="listado-tareas">
                {tasks.length === 0
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : tasks.map(element => <Task key={element.id} task={element} />)
                }
            </ul>
            <div className="center">
                <button className="btn btn-danger" type="button" onClick={handleClick}>Eliminar Proyecto</button>
            </div>
        </>
    );
}

export default TaskList;