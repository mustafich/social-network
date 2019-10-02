import React from "react"
import ContentLoginForm from "./content-login-form/content-login-form";
import "./css/content-login.css"

const ContentLogin = ()=>{
    return (
        <div className="loginBox">
            <div className="loginBox-block">
                <ContentLoginForm/>
            </div>
        </div>
    )
}
export default ContentLogin