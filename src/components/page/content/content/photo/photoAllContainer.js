import React from "react"
import PhotoAll from './photoAll'
import ContentVerification from "../contentVerification/contentVerification";
import connect from "react-redux/es/connect/connect";
import ContentNoLogin from "../content-Nologin/content-NoLogin";
import {addPhotoAll,deletePhotoAll} from "../../../../../redux/actions/actions-addPhotoAll";

const ContainerPhotoAll = ({state,addPhotoAll,deletePhotoAll}) => {

    return (
        ContentVerification(state, PhotoAll, ContentNoLogin,{addPhotoAll,deletePhotoAll})

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPhotoAll: (myId, photo) => {
            dispatch(addPhotoAll(myId, photo))
        },
        deletePhotoAll:(mydId,photoIdDelete)=>{
            dispatch(deletePhotoAll(mydId,photoIdDelete))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContainerPhotoAll)