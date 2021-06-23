import {userApi} from "../api/api";

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
let SET_USERS_COUNT = "SET_USERS_COUNT"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
let TOGGLE_FOLLOWING_IS_FETCHING = "TOGGLE_FOLLOWING_IS_FETCHING"


let initialState = {
    users: [],
    pageSize: 5,
    usersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsFetching: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_USERS_COUNT:
            return {...state, usersCount: action.usersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IS_FETCHING:
            return {
                ...state, followingIsFetching: action.isFetching
                    ? [...state.followingIsFetching, action.userId]
                    : state.followingIsFetching.filter(id => id != action.userId)

            }
        default:
            return state
    }
}
export const followSucsess = (userId) => ({type: FOLLOW, userId})
export const unfollowSucsess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_IS_FETCHING, isFetching, userId})
export const getUsers = (page, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    userApi.getUsers(page, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setUsersCount(data.totalCount))
    })
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true,userId))
    userApi.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSucsess(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true,userId))
    userApi.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSucsess(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}


export default usersReducer;