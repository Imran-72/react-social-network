import React from "react";
import s from "./ProfileInfo.module.css"
import Priloader from "../../../Common/Priloader/Priloader";
import ProfileStatusHooks from "./ProfileStatusHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Priloader/>
    }
    return <div>
        <div className={s.profilePhoto}>
            <img src={props.profile.photos.large}/>
            <span>{props.profile.fullName}<br/>{props.profile.aboutMe}</span>
        </div>
        <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
    </div>
}

export default ProfileInfo;