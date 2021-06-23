import React from "react";
import s from "./Users.module.css";
import User from "./User";
import Paginator from "../../Paginator/Paginator";


const Users = ({usersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return <div className={s.users}>
        <Paginator usersCount={usersCount} currentPage={currentPage} onPageChanged={onPageChanged}
                   pageSize={pageSize}
        />
        <div>
            {users.map(u => <User
                user={u}
                followingIsFetching={props.followingIsFetching}
                follow={props.follow}
                unfollow={props.unfollow}
                key={u.id}/>)}</div>
    </div>
}

export default Users;

