import React from "react";
import s from "./MyPost.module.css"
import Posts from "./Posts/Posts";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength10 =  maxLengthCreator(10)
const MyPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText"
                    validate={[required, maxLength10]}
            />
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const MyPostReduxForm = reduxForm({form: "ProfileMyPostForm"})(MyPostForm)
const MyPost = React.memo(props => {
    console.log("render")
    let postsElements = props.posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>);


    let addPostInSate = (values) => {
        props.addPostAC(values.newPostText)
    }
    return <div className={s.myPostReduxForm}>
        MyPost
       <MyPostReduxForm onSubmit={addPostInSate}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
})

export default MyPost;