import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    SHOW_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM
} from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda Virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de sitio web' }
    ]

    const initialState = {
        form: false,
        projects: [],
        formError: false
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: SHOW_FORM
        });
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    const addProject = project => {
        project.id = uuidv4();
        dispatch({
            type: ADD_PROJECT,
            payload: project
        });
    }
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        });
    }

    return (
        <projectContext.Provider value={{
            form: state.form,
            projects: state.projects,
            formError: state.formError,
            showForm,
            getProjects,
            addProject,
            showError
        }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;