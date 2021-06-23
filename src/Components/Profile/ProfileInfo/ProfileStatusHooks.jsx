import React, {useEffect, useState} from "react";


const ProfileStatusHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }
    const onStatusCganged = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusCganged} autoFocus={true} onBlur={deActivateEditMode} value={status}/>
        </div>
        }
    </div>
}


export default ProfileStatusHooks;