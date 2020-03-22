import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    SHOW_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, name: 'React' },
        { id: 2, name: 'Node' },
        { id: 3, name: 'MongoDB' }
    ]

    const initialState = {
        form: false,
        projects: [],
        formError: false,
        currentProject: null
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

    const getCurrentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        });
    }

    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        });
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                formError: state.formError,
                currentProject: state.currentProject,
                showForm,
                getProjects,
                addProject,
                showError,
                getCurrentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    );

}

export default ProjectState;