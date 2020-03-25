import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_tASK,
    TASK_STATUS,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        tasks: [
            { id: 0, projectId: 1, name: 'Estudiar React JS', status: true },
            { id: 1, projectId: 2, name: 'Estudiar Node JS', status: false },
            { id: 2, projectId: 2, name: 'Estudiar Express JS', status: false },
            { id: 3, projectId: 3, name: 'Estudiar MongoDB JS', status: false }
        ],
        projectTasks: null,
        currentTask: null,
        errorTask: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        });
    }

    const addTask = task => {
        task.id = uuidv4();
        dispatch({
            type: ADD_TASK,
            payload: task
        });
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        });
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_tASK,
            payload: id
        });
    }

    const changeTaskStatus = task => {
        dispatch({
            type: TASK_STATUS,
            payload: task
        });
    }

    const saveCurrentTask = task => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        });
    }

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
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
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                currentTask: state.currentTask,
                errorTask: state.errorTask,
                getProjectTasks,
                addTask,
                validateTask,
                deleteTask,
                changeTaskStatus,
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