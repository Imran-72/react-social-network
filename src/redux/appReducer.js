import {getAuthUserData} from "./authReducer";

let INITIALIZED_SUCSESS = "INITIALIZED_SUCSESS"


let initialState = {
    inizialied: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCSESS:
            return {
                ...state,
                inizialied: true
            }
        default:
            return state
    }
}
export const initializedSucsess = () => ({type: INITIALIZED_SUCSESS})
export const initializeApp = () => (dispatch) => {
 let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSucsess())
        })
}

export default appReducer;

