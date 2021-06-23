import React from "react";
import {addMessageAC} from "../../redux/diologsReducer";
import Diologs from "./Diologs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        diologs: state.diologsPage.diologs,
        message: state.diologsPage.message,
        newMessageText: state.diologsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessageAC: (newMessageText) => {
            dispatch(addMessageAC(newMessageText))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Diologs)
