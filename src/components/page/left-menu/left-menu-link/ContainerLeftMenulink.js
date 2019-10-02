import React from "react"
import LeftMenuLink from "./left-menu-link"
import connect from "react-redux/es/connect/connect";
import ContentVerification from "../../content/content/contentVerification/contentVerification";
import ContentNoLogin from "../../content/content/content-Nologin/content-NoLogin";

const ContainerLeftMenuLink = ({state}) => {

    return (
        ContentVerification(state,LeftMenuLink,null)

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}

export default connect(mapStateToProps)(ContainerLeftMenuLink)