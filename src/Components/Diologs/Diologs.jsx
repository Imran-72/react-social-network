import React from "react";
import s from "./Diologs.module.css";
import DiologsItem from "./DiologsItem/DiologsItem";
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator/validator";
import {Textarea} from "../../Common/FormsControls/FormsControls";


const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newMessageText"
                   placeholder="Enter your message"
            validate={[required, maxLength50]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageReduxForm = reduxForm({form: "diologsMessage"})(AddMessageForm)
const Diologs = (props) => {
    let diologsElements = props.diologs.map(d => <DiologsItem name={d.name} id={d.id}/>);
    let messages = props.message.map(m => <Messages message={m.message}/>);

    let addNewMessage = (values) => {
        props.addMessageAC(values.newMessageText)
    }
    return <div className={s.item}>
        <div>
            {diologsElements}
        </div>
        <div>
            {messages}
        </div>
<AddMessageReduxForm onSubmit={addNewMessage}/>
    </div>
};

export default Diologs;