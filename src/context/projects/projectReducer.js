import {
    SHOW_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR,
    RESET_PROJECT_STATE
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                currentProject: null
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects],
                form: false,
                formError: false
            }
        case VALIDATE_FORM:
            return {
                ...state,
                formError: true
            }
        case CURRENT_PROJECT:
            return {
                ...state,
                currentProject: state.projects.filter(element => element._id === action.payload)
            }
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter(element => element._id !== action.payload),
                currentProject: null
            }
        case PROJECT_ERROR:
            return {
                ...state,
                message: action.payload
            }
        case RESET_PROJECT_STATE:
            return {
                form: false,
                projects: [],
                formError: false,
                currentProject: null,
                message: null
            }

        default:
            return state;

    }
}