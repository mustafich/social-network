import React from "react"
import Exit from "./exit";
import ContentVerification from "../../../content/content/contentVerification/contentVerification";
import Аuthorization from "../account/authorization/authorization";
import connect from "react-redux/es/connect/connect";
import {addExit} from "../../../../../redux/actions/actions-exict";




const ExitContainer = ({state,addExit})=>{

    return (
        ContentVerification(state,Exit,Аuthorization,addExit)

    )
}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addExit:(id)=>{
            dispatch(addExit(id))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(ExitContainer)