import React, {Fragment} from "react"
import "./css/content-login-form.css"
import {connect} from "react-redux";
import ContentLoginFormRegister from "./content-login-form-register/content-login-form-register";
import ContentLoginFormLogin from "./content-login-form-login/content-login-form-login";

const ContentLoginForm = () => {

    const addTogFirst = () => {
        let tabContent = document.querySelectorAll(".tab-content");
        let tabLink = document.querySelectorAll(".tab-link");
        tabContent[1].classList.remove("current")
        tabLink[1].classList.remove("current")
        tabContent[0].classList.add("current")
        tabLink[0].classList.add("current")
    }
    const addTogLast = () => {
        let tabContent = document.querySelectorAll(".tab-content");
        let tabLink = document.querySelectorAll(".tab-link");
        tabContent[0].classList.remove("current")
        tabLink[0].classList.remove("current")
        tabContent[1].classList.add("current")
        tabLink[1].classList.add("current")
    }

    return (
        <Fragment>
            <div className="tabs">
                <div onClick={addTogFirst} className="tab tab-link current" data-tab="tab-1">Войти</div>
                <div onClick={addTogLast} className="tab tab-link" data-tab="tab-2">Регистриция</div>
            </div>
            <ContentLoginFormLogin/>
            <ContentLoginFormRegister/>
        </Fragment>
    )
}
// const mapStateToProps = ({}) => {
//     return {};
// };
//
// const mapDispatchToProps = () => {
//     return {
//         addIId: () => {
//             let action = addRegistration()
//             dispatch(action)
//         }
//     }
// };
export default ContentLoginForm