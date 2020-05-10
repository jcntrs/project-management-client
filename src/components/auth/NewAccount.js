import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../../context/alerts/AlertContext';
import AuthContext from '../../context/authentication/AuthContext';
import avatar from '../../assets/img/avatar.svg';
import bg from '../../assets/img/bg.svg';
import wave from '../../assets/img/wave.png';
import '../../assets/css/login.css';

const NewAccount = props => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { authenticated, message, userRegister } = authContext;

    const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });
    const { username, email, password, confirmPassword } = user;

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            showAlert('Todos los campos son obligatorios', 'alerta-error');
            return;
        }
        if (password.length < 6) {
            showAlert('El password debe ser al menos 6 caracteres', 'alerta-error');
            return;
        }
        if (password !== confirmPassword) {
            showAlert('Las contraseñas deben ser iguales', 'alerta-error');
            return;
        }
        userRegister({ name: username, email, password });
    }

    const handleFocus = event => {
        const parent = event.target.parentNode.parentNode;
        parent.classList.add("focus");
    }

    const handleBlur = event => {
        const parent = event.target.parentNode.parentNode;
        if (event.target.value === '') {
            parent.classList.remove("focus");
        }
    }

    useEffect(() => {
        authenticated && props.history.push('/proyectos');
        message && showAlert(message.msg, message.category);
        // eslint-disable-next-line
    }, [authenticated, message, props.history]);

    return (
        <>
            {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
            <img className="wave" src={wave} alt="wave" />
            <div className="container">
                <div className="img">
                    <img src={bg} alt="bg" />
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit} className="login-form">
                        <img src={avatar} alt="avatar" />
                        <h2 className="title">Crea tu Cuenta</h2>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="div">
                                <h5>Nombre de usuario</h5>
                                <input
                                    id="inpUsername"
                                    className="input"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-envelope-open"></i>
                            </div>
                            <div className="div">
                                <h5>E-mail</h5>
                                <input
                                    id="inpEmail"
                                    className="input"
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Contraseña</h5>
                                <input
                                    id="inpPassword"
                                    className="input"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <i className="fas fa-lock"></i>
                            </div>
                            <div className="div">
                                <h5>Confirmar contraseña</h5>
                                <input
                                    id="inpConfirmPassword"
                                    className="input"
                                    type="password"
                                    name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <Link to="/" className="link-login">Volver a Iniciar Sesión</Link>
                        <input className="btn-new-account" type="submit" value="Registrarme" />
                    </form>
                </div>
            </div>
        </>
    );

}

export default NewAccount;