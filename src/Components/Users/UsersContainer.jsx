import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage, toggleIsFollowing,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Priloader from "../../Common/Priloader/Priloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingIsFetching,
    getIsFetching,
    getPageSize,
    getUsersCount,
    requestUsers
} from "../../redux/reselectReducer";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Priloader/> : null}
            <Users pageSize={this.props.pageSize}
                   users={this.props.users}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersCount={this.props.usersCount}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingIsFetching={this.props.followingIsFetching}
            />
        </>
    }
};


let mapStateToProps = (state) => {
    return {
        users: requestUsers(state),
        pageSize: getPageSize(state),
        usersCount: getUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsFetching: getFollowingIsFetching(state)
    }
}


export default compose(
    connect(mapStateToProps, {follow,unfollow,toggleIsFollowing,setCurrentPage,getUsers}),
)(UsersContainer)





























/*
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersCount: (totalCount) => {
            dispatch(setUsersCountAC(totalCount))
        },
        toggleisFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}
*/
