import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setName } from './actions/userActions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>{ this.props.user.name }</p>

        <button onClick={ () => this.props.setName('Farazi') }>Click Here</button>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer,
    math: state.mathReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setName: (name) => {
      dispatch( setName(name) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)