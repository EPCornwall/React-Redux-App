import React, { useEffect } from 'react';
import './App.css';
import Jokes from './components/Jokes';
import {connect} from 'react-redux';
import {fetchJokes} from './store/actions';

function App({fetchJokes, loadingJokes, errorMessage}) {
  useEffect(() =>{
    fetchJokes();
  }, [fetchJokes])
  return (
    <div className="App">
      <h1>Enjoy some programming Jokes!!</h1>
      {!loadingJokes ? <Jokes /> : <div>... Fetching jokes</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null }
    </div>
  );
}

function mapStateToProps(state) {
  return{
    loadingJokes: state.loadingJokes,
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, {fetchJokes})(App);
