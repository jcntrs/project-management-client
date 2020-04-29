import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/axios';
import authToken from '../../config/authToken';
import {
    SUCCESSFUL_REGISTRATION,
    REGISTRATION_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';
import axiosClient from '../../config/axios';

const AuthState = ({ children }) => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const userRegister = async userData => {
        try {
            const response = await clientAxios.post('/api/users', userData);
            console.log(response)
            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: response.data
            });
            getAuthenticatedUser();
        } catch (error) {
            console.log(error)
            console.log(error.response)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: REGISTRATION_ERROR,
                payload: alert
            });
        }
    }

    const logIn = async userData => {
        try {
            const response = await axiosClient.post('/api/authentication', userData);
            console.log(response)
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: response.data
            });
            getAuthenticatedUser();
        } catch (error) {
            console.log(error.response.data.msg)
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    const getAuthenticatedUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            authToken(token);
        }
        try {
            const response = await clientAxios.get('/api/authentication');
            console.log(response)
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
        } catch (error) {
            console.log(error.response)
            dispatch({
                type: LOGIN_ERROR
            });
        }
    }

    const signOff = () => {
        dispatch({
            type: SIGN_OFF
        });
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                userRegister,
                logIn,
                getAuthenticatedUser,
                signOff
            }}
        >
            {children}
        </AuthContext.Provider>
    );

}

export default AuthState;