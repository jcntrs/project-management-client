import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
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
                        <input className="btn btn-primario btn-block" type="submit" value="Iniciar Sesión" />
                    </div>
                </form>
                <Link to="/nueva-cuenta" className="enlace-cuenta">Obtener Cuenta</Link>
            </div>
        </div>
    );

}

export default Login;