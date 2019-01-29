import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setName, setAge } from '../actions/userActions'

class MyApp extends Component {
    render() {
        return (
            <div>
                <p>My App</p>
                <p>Name: { this.props.user.name } </p>
                <div>Age: {this.props.user.age } </div>
                <button onClick={ () => this.props.dispatch(setName('Faiza Fatema')) }>Click here</button>
                <button onClick={ () => this.props.dispatch(setAge(99)) }>Click Age</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

export default connect(mapStateToProps)(MyApp)
