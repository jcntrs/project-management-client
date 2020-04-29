import {
    SUCCESSFUL_REGISTRATION,
    REGISTRATION_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    SIGN_OFF
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SUCCESSFUL_LOGIN:
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case LOGIN_ERROR:
        case REGISTRATION_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authenticated: null,
                user: null,
                message: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                token: localStorage.getItem('token'),
                authenticated: true,
                user: action.payload,
                loading: false
            }
        case SIGN_OFF:
            return {
                ...state,
                token: null,
                authenticated: null,
                user: null,
                message: null,
                loading: false
            }
        default:
            return state;
    }
}