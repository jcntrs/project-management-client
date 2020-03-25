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

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(element => element.projectId === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks: state.tasks.filter(element => element.id !== action.payload)
            }
        case UPDATE_TASK:
        case TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map(element => element.id === action.payload.id ? action.payload : element)
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

        default:
            break;
    }
}