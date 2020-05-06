import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import axiosClient from '../../config/axios';
import authToken from '../../config/authToken';
import {
    SHOW_FORM,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR
} from '../../types';


const ProjectState = props => {

    const initialState = {
        form: false,
        projects: [],
        formError: false,
        currentProject: null,
        message: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState);

    const showForm = () => {
        dispatch({
            type: SHOW_FORM
        });
    }

    const getProjects = async () => {
        const token = localStorage.getItem('token');
        token && authToken(token);
        try {
            const result = await axiosClient.get('/api/projects');
            console.log(result)
            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projectsByUser
            });
        } catch (error) {
            const alert = { msg: 'Hubo un error', category: 'alerta-error' };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }

    const addProject = async project => {
        try {
            const result = await axiosClient.post('/api/projects', project);
            console.log(result)
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            });
        } catch (error) {
            const alert = { msg: 'Hubo un error', category: 'alerta-error' };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
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

    const deleteProject = async projectId => {
        try {
            await axiosClient.delete(`/api/projects/${projectId}`);
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            });
        } catch (error) {
            const alert = { msg: 'Hubo un error', category: 'alerta-error' };
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                formError: state.formError,
                currentProject: state.currentProject,
                message: state.message,
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