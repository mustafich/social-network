import React from "react"
import Friends from './Friends'
import ContentVerification from "../contentVerification/contentVerification";
import connect from "react-redux/es/connect/connect";
import ContentNoLogin from "../content-Nologin/content-NoLogin";
import {addFriends,deleteFriends} from "./../../../../../redux/actions/actions-friends"
import {addUserClick} from "../../../../../redux/actions/actions-user";
const ContainerFriends = ({state,addFriends,deleteFriends,addUserClick}) => {
    return (
        ContentVerification(state,Friends,ContentNoLogin,{addFriends,deleteFriends,addUserClick})

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
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
        addUserClick: (obg) => {
            dispatch(addUserClick(obg))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContainerFriends)