const mathReducer = (state = 1, action) => {
    switch (action.type) {
        case "ADD":
            return state + action.payload
        case "SUBTRACT":
            return state - action.payload
        default:
            return state
    }
}

export default mathReducer;