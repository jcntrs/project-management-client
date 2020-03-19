import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { currentProject } = projectsContext;

    return (
        <>
            {currentProject &&
                <div className="formulario">
                    <form>
                        <div className="contenedor-input">
                            <input
                                className="input-text"
                                type="text"
                                name="name"
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