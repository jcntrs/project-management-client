import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { SHOW_FORM, GET_PROJECTS } from '../../types';

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Tienda Virtual' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Diseño de sitio web' }
    ]

    const initialState = {
        form: false,
        projects: []
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

    return (
        <projectContext.Provider value={{
            form: state.form,
            projects: state.projects,
            showForm,
            getProjects
        }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;