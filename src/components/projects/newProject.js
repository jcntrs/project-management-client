import React, { useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;

    const [project, setProject] = useState({ name: '' });
    const { name } = project;

    const handleChange = event => {
        setProject({ ...project, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <>
            <button className="btn btn-block btn-primario" type="button" onClick={showForm}>Nuevo Proyecto</button>
            {form &&
                <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
                    <input
                        className="input-text"
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Nombre del proyecto"
                        onChange={handleChange}
                    />
                    <input
                        className="btn btn-primario btn-block"
                        type="submit"
                        value="Agregar Proyecto"
                    />
                </form>
            }
        </>
    );

}

export default NewProject;