import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './containers/Main';
import { connect } from 'react-redux';
import { initializingUserInfo } from './actions';

const mapStateToProps = (state) => {
  return{
    courses: state.initializeUserInfo.courses,
    isPending: state.initializeUserInfo.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onInitializingUserInfo: () => {
      dispatch(initializingUserInfo())
    }
  }
}

function App(props) {

  const { onInitializingUserInfo } = props

  useEffect(()=> {
    window.onload = () => {
      onInitializingUserInfo()
    }
  })

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
