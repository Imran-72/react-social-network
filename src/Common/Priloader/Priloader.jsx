import React from "react";
import loader from "../../Photos/loader.gif"
import s from "./Priloader.module.css"

const Priloader = (props) => {
    return <div>
        <img className={s.priloader} src={loader}/>
    </div>
}

export default Priloader;