import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
    return <div>
        <div className={s.item}>
            <img src="https://i2.wp.com/avatarfiles.alphacoders.com/712/thumb-71233.png"/>
            {props.message}
            <div>{props.likesCount}</div>
        </div>
    </div>
}

export default Posts;