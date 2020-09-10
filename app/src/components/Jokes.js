import React from 'react';
import {connect} from 'react-redux';
import Joke from './Joke';

function Jokes(props) {
    return(
        <>
            {props.jokes.map((joke) =>{
                return <Joke key={joke.id} joke={joke} />;
            })}

        </>
    )
}

function mapStateToProps(state) {
    return{
        jokes: state.jokes
    }
}

export default connect(mapStateToProps, {})(Jokes);