import {profileApi, userApi} from "../api/api";

let ADD_POST = "ADD_POST"
let SET_USER_PROFILE = "SET_USER_PROFILE"
let SET_STATUS = "SET_STATUS"

let initialState = {
    posts: [
        {id: 1, message: "Who do you want to become", likesCount: 22},
        {id: 2, message: "I will become a hokage", likesCount: 12}
    ],
    profile: null,
    status: ""
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostText, likesCount: 0}],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }
}
export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    userApi.getUserProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}


export default profileReducer;

