import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../../Common/FormsControls/FormsControls";
import {required} from "../../utils/validator/validator";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import s from "./../../Common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "rememberMe")}
        {error &&
            <div className={s.formSamariError}>
                {error}
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>
}
const LoginReduxForm = reduxForm({form: "login"})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login);