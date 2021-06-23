import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../Photos/user.png";
import {NavLink} from "react-router-dom";


const User = ({user, follow, unfollow, followingIsFetching}) => {
    return <div className={s.users}>
        <div key={user.id}>
            <div>
                <NavLink to={'/profile/' + user.id}><img
                    src={user.photos.small != null ? user.photos.small : userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {user.status}
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingIsFetching.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>UNFOLLLOW</button>
                    : <button disabled={followingIsFetching.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>FOLLLOW</button>}
            </div>
        </div>
    </div>
}

export default User;

