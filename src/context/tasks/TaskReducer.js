import {
    PROJECT_TASKS,
    ADD_TASK,
    VALIDATE_TASK,
    DELETE_tASK,
    CURRENT_TASK,
    UPDATE_TASK,
    CLEAN_TASK,
    RESET_TASK_STATE
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                projectTasks: [action.payload, ...state.projectTasks],
                errorTask: false
            }
        case VALIDATE_TASK:
            return {
                ...state,
                errorTask: true
            }
        case DELETE_tASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter(element => element._id !== action.payload)
            }
        case UPDATE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.map(element => element._id === action.payload._id ? action.payload : element)
            }
        case CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            }
        case CLEAN_TASK:
            return {
                ...state,
                currentTask: null
            }
        case RESET_TASK_STATE:
            return {
                projectTasks: [],
                currentTask: null,
                errorTask: false
            }

        default:
            break;
    }
}