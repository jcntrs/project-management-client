import React, { useReducer } from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {
    PROJECT_TASKS,
    ADD_TASK
} from '../../types';

const TaskState = props => {

    const initialState = {
        tasks: [
            { projectId: 1, name: 'Estudiar React JS', status: true },
            { projectId: 2, name: 'Estudiar Node JS', status: false },
            { projectId: 2, name: 'Estudiar Express JS', status: false },
            { projectId: 3, name: 'Estudiar MongoDB JS', status: false }
        ],
        projectTasks: null
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

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getProjectTasks,
                addTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );

}

export default TaskState;