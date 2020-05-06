import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/authentication/AuthContext';

const Login = props => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { authenticated, message, logIn } = authContext;

    const [user, setUser] = useState({ email: '', password: '' });
    const { email, password } = user;

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        } else {
            logIn({ email, password });
        }
    }

    useEffect(() => {
        authenticated && props.history.push('/proyectos');
        message && showAlert(message.msg, message.category);
        // eslint-disable-next-line
    }, [authenticated, message, props.history]);

    return (
        <div className="form-usuario">
            {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
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