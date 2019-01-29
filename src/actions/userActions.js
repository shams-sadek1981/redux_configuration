export const SET_NAME = 'SET_NAME'
export const SET_AGE = 'SET_AGE'

export function setName(name) {
    // return {
    //     type: SET_NAME,
    //     name
    // }

    return {
        type: SET_NAME,
        payload: new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(name)
            },2000)
        })
    }
}

export const setAge = (age) => {
    return (dispatch, getState) => {
        console.log(getState().userReducer)
        dispatch({
            type: SET_AGE,
            age: 89
        })
    }
}