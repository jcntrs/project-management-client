import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const { username, email, password, confirmPassword } = user;

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener Cuenta</h1>
                <form onSubmit={handleSubmit}>
                    <div className="campo-form">
                        <label htmlFor="inpUsername">Nombre de usuario</label>
                        <input
                            id="inpUsername"
                            type="text"
                            name="username"
                            placeholder="Ingresa tu nombre de usuario"
                            value={username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="inpEmail">E-mail</label>
                        <input
                            id="inpEmail"
                            type="email"
                            name="email"
                            placeholder="Ingresa tu e-mail"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="inpPassword">Contraseña</label>
                        <input
                            id="inpPassword"
                            type="password"
                            name="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="inpConfirmPassword">Confirmar contraseña</label>
                        <input
                            id="inpConfirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="Ingresa tu confirmación de contraseña"
                            value={confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input className="btn btn-primario btn-block" type="submit" value="Registrarme" />
                    </div>
                </form>
                <Link to="/" className="enlace-cuenta">Volver a Iniciar Sesión</Link>
            </div>
        </div>
    );
}

export default NewAccount;