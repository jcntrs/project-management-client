import React, { useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/tasks/TaskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject, deleteProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { projectTasks } = tasksContext;

    if (!currentProject)
        return <h2>Selecciona un proyecto</h2>;

    const [project] = currentProject;

    const handleClick = () => {
        deleteProject(project._id);
    }

    return (
        <>
            <h2>Proyecto: {project.name}</h2>
            <ul className="listado-tareas">
                {projectTasks.length === 0 ?
                    <li className="tarea"><p>No hay tareas</p></li>
                    :
                    <TransitionGroup>
                        {projectTasks.map((element, index) =>
                            <CSSTransition
                                key={index}
                                classNames="tarea"
                                timeout={200}
                            >
                                <Task task={element} />
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                }
            </ul>
            <div className="center">
                <button className="btn btn-danger" type="button" onClick={handleClick}>Eliminar Proyecto</button>
            </div>
        </>
    );
}

export default TaskList;