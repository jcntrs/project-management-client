import {
    PROJECT_TASKS,
    ADD_TASK
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
                tasks: [...state.tasks, action.payload]
            }

        default:
            break;
    }
}