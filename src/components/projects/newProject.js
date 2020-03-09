import React, { useState } from 'react';

const NewProject = () => {

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
            <button className="btn btn-block btn-primario" type="button">Nuevo Proyecto</button>
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
        </>
    );

}

export default NewProject;