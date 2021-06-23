import React from "react"
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={`${s.item} ${s.acative}`}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/diologs' activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={`${s.item} ${s.acative}`}>
            <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
        </div>
        <div className={`${s.item} ${s.acative}`}>
            <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={`${s.item} ${s.acative}`}>
            <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
        </div>
    </nav>
};

export default Navbar;