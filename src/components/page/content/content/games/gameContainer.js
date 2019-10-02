import React from "react"
import connect from "react-redux/es/connect/connect";
import NoComponent from "../content-Nologin/content-NoLogin"
import Game from "./game";
import ContentVerification from "../contentVerification/contentVerification";

const GameContainer = ({state}) => {
    return (
        ContentVerification(state,Game,NoComponent)

    )

}
const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}

export default connect(mapStateToProps)(GameContainer)