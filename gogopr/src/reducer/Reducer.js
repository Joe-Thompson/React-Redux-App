import { GET_RANGER_START, GET_RANGER_SUCCESS, GET_RANGER_ERROR, CLEAR_STATE } from "../actions/Actions";

const initialState = {
    isLoading: false,
    error: null,
    data: {}
};

export function getReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RANGER_START:
            return {
                ...state,
                isLoading: true
            };
        case GET_RANGER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case GET_RANGER_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case CLEAR_STATE:
            return {
                isLoading: false,
                error: null,
                smurf: {}
            };
        default:
            return state;
    }
}