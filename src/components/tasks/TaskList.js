import React from 'react';
import Task from './Task';

const TaskList = () => {

    const tasks = [
        { id: 1, name: 'Estudiar React JS', status: true },
        { id: 2, name: 'Estudiar Node JS', status: false }
    ];

    return (
        <>
            <h2>Proyecto: Estudiar</h2>
            <ul className="listado-tareas">
                {tasks.length === 0
                    ? <li className="tarea"><p>No hay tareas</p></li>
                    : tasks.map(element => <Task key={element.id} task={element} />)
                }
            </ul>
            <div className="center">
                <button className="btn btn-danger" type="button">Eliminar Proyecto</button>
            </div>
        </>
    );
}

export default TaskList;