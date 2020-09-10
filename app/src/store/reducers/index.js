import{
    FETCH_JOKES,
    FETCH_JOKES_ERROR,
    FETCH_JOKES_SUCCESS
} from "../actions";

const initialState = {
    jokes: [],
    loadingJokes: true,
    errorMessage: ""
};

export default (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_JOKES:
            return {
                ...state,
                loadingJokes: true
            };
        case FETCH_JOKES_ERROR:
            return{
                ...state,
                loadingJokes: false,
                errorMessage: action.payload.message
            };
        case FETCH_JOKES_SUCCESS:
            return{
                ...state,
                jokes: action.payload,
                loadingJokes: false
            };
        default:
            return state;
    }   
}