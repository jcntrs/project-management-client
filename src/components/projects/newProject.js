import React, { useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    const projectsContext = useContext(projectContext);
    const { form, formError, showForm, addProject, showError } = projectsContext;

    const [project, setProject] = useState({ name: '' });
    const { name } = project;

    const handleChange = event => {
        setProject({ ...project, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (name.trim() === '') {
            showError();
        } else {
            addProject(project);
            setProject({ name: '' });
        }
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
            {formError && <p className="mensaje error">El nombre del proyecto es obligatorio</p>}
        </>
    );

}

export default NewProject;