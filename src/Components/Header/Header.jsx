import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import logo from "./../../Photos/logo.png"

const Header = (props) => {
    return <header className={s.header}>
        <img
            src={logo}/>
        <div className={s.navDiv}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
};

export default Header;