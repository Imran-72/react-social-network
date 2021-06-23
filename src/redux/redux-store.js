import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import diologsReducer from "./diologsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer";


let reducer = combineReducers({
    profilePage: profileReducer,
    diologsPage: diologsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})
    
let store = createStore(reducer, applyMiddleware(thunkMiddleware))

window.store = store

export default store;