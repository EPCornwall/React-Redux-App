import axios from 'axios';
export const FETCH_JOKES = "FETCH_JOKES"
export const FETCH_JOKES_SUCCESS = "FETCH_JOKES_SUCCESS"
export const FETCH_JOKES_ERROR ="FETCH_JOKES_ERROR"

export const fetchJokes = () =>{
    return(dispatch) =>{
        dispatch({type: FETCH_JOKES});
        axios.get("https://official-joke-api.appspot.com/jokes/programming/ten")
        .then((res) =>{
            console.log(res);
            dispatch({ type: FETCH_JOKES_SUCCESS, payload: res.data})
        })
        .catch((error) =>{
            dispatch({
                type: FETCH_JOKES_ERROR,
                payload: {message: "Sorry, cant think of any right now"}
            });
        });
    };
};