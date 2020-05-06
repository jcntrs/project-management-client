import React, { useContext } from 'react';
import AuthContext from '../../context/authentication/AuthContext';

const Header = () => {

    const authContext = useContext(AuthContext);
    const { user, signOff } = authContext;

    return (
        <header className="app-header">
            <p className="nombre-usuario">{user && <span>Hola {user.name}</span>}</p>
            <nav className="nav-principal">
                <button className="btn btn-blank cerrar-sesion" onClick={() => signOff()}>Cerrar Sesión</button>
            </nav>
        </header>
    );

}

export default Header;