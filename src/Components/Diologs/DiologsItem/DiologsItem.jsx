import React from "react";
import s from "./../Diologs.module.css";
import {NavLink} from "react-router-dom";


const DiologsItem = (props) => {
    let path = "/diologs/" + props.id;
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};


export default DiologsItem;