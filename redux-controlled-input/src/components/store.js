import {createStore} from "redux"

const initState = {
    username: "",
    email: ""
}

function userReducer(state = initState, action) {
    switch(action.type) {
        case "username": 
            return {...state, username: action.payload}
        case "email":
            return {...state, email: action.payload}
        default:
            return state
    }
}


const store = createStore(userReducer)


export default store