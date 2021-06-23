import {createSelector} from "reselect";

export const requestUsersSelector = (state) => {
    return state.usersPage.users
}
export const requestUsers = createSelector(requestUsersSelector, (users) => {
   return  users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getUsersCount = (state) => {
    return state.usersPage.usersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingIsFetching = (state) => {
    return state.usersPage.followingIsFetching
}