import React from "react";
import {addPostAC} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPostAC: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPost)

