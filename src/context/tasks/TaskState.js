import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_tASK
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                errorTask: state.errorTask,
                getProjectTasks,
                addTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );

}

export default TaskState;