const userReducer = (state = { name: 'Sadik', age: 23 }, action) => {
    switch (action.type) {
        case "SET_NAME":
            return state = { ...state, name: 'pending...' }
        case "SET_NAME_FULFILLED":
            return state = { ...state, name: action.payload }
        case "SET_AGE":
            return state = { ...state, age: action.age }
        default:
            return state
    }
}

export default userReducer;