import React from "react"
import "./css/content.css"
import SocialNetwork from "./content/social-network/SocialNetwork";
import {Route} from "react-router-dom";
import ContentLogin from "./content/content-login/content-login";
import ContainerMyPage from "./content/myPage/ContainerMyPage";
import connect from "react-redux/es/connect/connect";
import ContainerFriends from "./content/friends/ContainerFriends";
import ContainerSettings from "./content/settings/containerSettings";
import ContainerPageUser from "./content/PageUser/ContainerPageUser";
import ContainerPhotoAll from "./content/photo/photoAllContainer";
import GameContainer from "./content/games/gameContainer";


const Content = ({state}) => {
    return (
            <div className="content">
                <Route path="/social-network" component={SocialNetwork}/>
                <Route path="/authorization" exact component={ContentLogin}/>
                <Route path="/MyPage/" render={()=>{
                    return <ContainerMyPage/>
                }} />
                <Route path="/PageUser/" render={()=>{
                    return <ContainerPageUser/>
                }} />
                <Route path="/friends/" render={()=>{
                    return <ContainerFriends/>
                }} />
                <Route path="/games/" render={()=>{
                    return <GameContainer/>
                }} />
                <Route path="/settings/" render={()=>{
                    return <ContainerSettings/>
                }} />
                <Route path="/photo/" render={()=>{
                    return <ContainerPhotoAll/>
                }} />
            </div>
    )
}

const mapStateToProps = function (state) {
    return {
        state: state.reducerUser.registered
    }
}
export default connect(mapStateToProps)(Content)