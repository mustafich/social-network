import React from "react";
import MyPage from "./myPage"
import connect from "react-redux/es/connect/connect";
import ContentNoLogin from "../content-Nologin/content-NoLogin";
import ContentVerification from "../contentVerification/contentVerification";

const ContainerMyPage = ({state}) => {
    return (
        ContentVerification(state,MyPage,ContentNoLogin)

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}
export default connect(mapStateToProps)(ContainerMyPage)

