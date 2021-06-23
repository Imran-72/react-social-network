import React from "react"
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostContainer store={props.store} />
    </div>
};

export default Profile;