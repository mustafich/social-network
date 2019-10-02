import React from "react"
import {connect} from "react-redux";
import {actionOnlineUser} from "../../../../../../../redux/actions/actions-online"
import ContentNoLogin from "../../../myPage/ContainerMyPage";


const ContentLoginFormLogin = ({state, actionOnlineUser}) => {
    const onlineUserValue = (event) => {
        event.preventDefault();
        let loginInputVauleName = document.querySelectorAll(".loginInputVaule")[0]
        let loginInputVaulePassword = document.querySelectorAll(".loginInputVaule")[1]
        let registeredUser = state.reducerUser.registered
        let error = document.querySelectorAll(".loginInputVaule")
        error.forEach((e) => {
            e.addEventListener("click", () => {
                e.style.border = ""
            })
        })


        let proverka = registeredUser.find(el => el.online === true)
        if (proverka !== undefined) {

        }


        let y = 0
        registeredUser.find((user) => {
            if (y === 0) {
                loginInputVauleName.style.border = ""
                loginInputVaulePassword.style.border = ""
                let id = user.id
                let name = user.name
                let password = user.password
                if (name === loginInputVauleName.value || password === loginInputVaulePassword.value) {
                    if (name === loginInputVauleName.value && password === loginInputVaulePassword.value) {
                        let online = true
                        actionOnlineUser(online, id)
                        y = 1
                        return y
                    } else if (name !== loginInputVauleName.value) {
                        loginInputVauleName.style.border = "2px solid red"
                        y = 1
                        return y
                    } else if (password !== loginInputVaulePassword.value) {
                        loginInputVaulePassword.style.border = "2px solid red"
                        y = 1
                        return y
                    }
                } else {
                    loginInputVauleName.style.border = "2px solid red"
                    loginInputVaulePassword.style.border = "2px solid red"

                }
            } else if (y === 1) {

            }


        })
    }
    return (

        <form className="tab-content current  login" action="" id="tab-1">
            <div className="form-div">
                <div className="input-area">
                    <input className="input loginInputVaule" type="text" placeholder="Имя"/>
                    <div className="input-icon fa fa-user"></div>
                </div>
            </div>
            <div className="form-div">
                <div className="input-area">
                    <input className="input loginInputVaule" type="password" placeholder="Пароль"/>
                    <div className="input-icon fa fa-lock"></div>
                </div>
            </div>
            <div className="form-footer">
                {/*<button><span>Забыл пороль?</span><span className="fa fa-question"></span></button>*/}
                <button onClick={onlineUserValue}><span>Войти</span><span className="fa fa-sign-in"></span></button>
            </div>
        </form>
    )

}
const mapStateToProps = (state) => {
    return {
        state
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        actionOnlineUser: (online, password) => {
            dispatch(actionOnlineUser(online, password))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ContentLoginFormLogin)