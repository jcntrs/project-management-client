import { SHOW_FORM, GET_PROJECTS } from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SHOW_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        default:
            return state;

    }
}