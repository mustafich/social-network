import React from "react"
import PageUser from "./PageUser";
import connect from "react-redux/es/connect/connect";
import ContentNoLogin from "../content-Nologin/content-NoLogin";
import ContentVerification from "../contentVerification/contentVerification";
import {addFriends, deleteFriends} from "../../../../../redux/actions/actions-friends";




const ContainerPageUser = ({state,addFriends,deleteFriends,user}) => {
    return (
        ContentVerification(state,PageUser,ContentNoLogin,{addFriends,deleteFriends},user)

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered,
        user:state.reducerUser.userClick
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addFriends: (myId,id) => {
            dispatch(addFriends(id,myId))
        },
        deleteFriends: (myId,id) => {
            dispatch(deleteFriends(id,myId))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerPageUser)