import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import axiosClient from '../../config/axios';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_tASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        projectTasks: [],
        currentTask: null,
        errorTask: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = async project => {
        console.log(project)
        try {
            const result = await axiosClient.get('/api/tasks', { params: { project } });
            console.log(result)
            dispatch({
                type: PROJECT_TASKS,
                payload: result.data.currentTasks
            });
        } catch (error) {
            console.log(error)
        }
    }

    const addTask = async task => {
        console.log(task)
        try {
            const result = await axiosClient.post('/api/tasks', task);
            console.log(result)
            dispatch({
                type: ADD_TASK,
                payload: task
            });
        } catch (error) {
            console.log(error)
        }
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        });
    }

    const deleteTask = async (id, project) => {
        console.log(id, project)
        try {
            await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });
            dispatch({
                type: DELETE_tASK,
                payload: id
            });
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = async task => {
        try {
            const result = await axiosClient.put(`/api/tasks/${task._id}`, task);
            console.log(result)
            dispatch({
                type: UPDATE_TASK,
                payload: result.data.currentTask
            });
        } catch (error) {
            console.log(error)
        }
    }

    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    }

    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        });
    }

    return (
        <TaskContext.Provider
            value={{
                projectTasks: state.projectTasks,
                currentTask: state.currentTask,
                errorTask: state.errorTask,
                getProjectTasks,
                addTask,
                validateTask,
                deleteTask,
                saveCurrentTask,
                updateTask,
                cleanTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );

}

export default TaskState;