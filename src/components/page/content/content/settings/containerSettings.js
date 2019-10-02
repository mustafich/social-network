import React from "react"
import ContentVerification from "../contentVerification/contentVerification";
import Settings from "./settings";
import ContentNoLogin from "../content-Nologin/content-NoLogin";
import connect from "react-redux/es/connect/connect";
import {editUserSettings} from "../../../../../redux/actions/actions-edit";






const ContainerSettings = ({state,editUserSettings})=>{
    return (
        ContentVerification(state,Settings,ContentNoLogin,editUserSettings)
    )
}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}
const mapStateToDispatch = function (dispatch) {
    return {
        editUserSettings: (modifiedValue,id,text) => {
            dispatch(editUserSettings(modifiedValue,id,text))
        },


    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ContainerSettings)

