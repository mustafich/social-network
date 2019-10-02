import React from "react"
import {connect} from "react-redux";
import {
    addRegistration,
    addRegistrationChangeName,
    addRegistrationChangeEmail,
    addRegistrationChangePassword
} from "../../../../../../../redux/actions/actions-regist";

const ContentLoginFormRegister = ({state, addRegistration, addRegistrationChangeName, addRegistrationChangeEmail, addRegistrationChangePassword}) => {
    let Name = state.reducerUser.registeredInputName
    let Email = state.reducerUser.registeredInputEmail
    let Password = state.reducerUser.registeredInputPassword
    let error = document.querySelectorAll(".registInputVaule");
    error.forEach((e) => {
        e.addEventListener("click", () => {
            e.style.border = ""
        })
    })
    function valueProverka(event) {
        event.preventDefault();
        let idLength = state.reducerUser.registered.length - 1
        let idUser = state.reducerUser.registered
        let id =idUser[idLength].id + 1
        let name = document.querySelectorAll(".registInputVaule")[0].value
        let emaill = document.querySelectorAll(".registInputVaule")[1].value
        let password = document.querySelectorAll(".registInputVaule")[2].value
        if (name.length <= 1) {
            let name = document.querySelectorAll(".registInputVaule")[0]
            name.style.border = "2px solid red"
        } else if (emaill.length <= 5) {
            let emaill = document.querySelectorAll(".registInputVaule")[1]
            emaill.style.border = "2px solid red"
        } else if (password.length <= 3) {
            let password = document.querySelectorAll(".registInputVaule")[2]
            password.style.border = "2px solid red"
        } else {
            addRegistration(name, emaill, password,id)
        }
    }

    return (
        <form className="tab-content register" action="" id="tab-2">
            <div className="form-div">
                <div className="input-area">
                    <input className="input registInputVaule" type="text" placeholder="Имя"
                           onChange={addRegistrationChangeName} value={Name}/>
                    <div className="input-icon fa fa-user"></div>
                </div>
            </div>
            <div className="form-div">
                <div className="input-area">
                    <input onChange={addRegistrationChangeEmail} className="input registInputVaule" type="email"
                           placeholder="Эмаил" value={Email}/>
                    <div className="input-icon fa fa-envelope"></div>
                </div>
            </div>
            <div className="form-div">
                <div className="input-area">
                    <input onChange={addRegistrationChangePassword} className="input registInputVaule" type="password"
                           placeholder="Пароль" value={Password}/>
                    <div className="input-icon fa fa-lock"></div>
                </div>
            </div>
            <div className="form-footer">
                <button onClick={valueProverka}><span>Регистриция</span><span className="fa fa-user-plus"></span>
                </button>
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
        addRegistration: (name, emaill, password, id) => {
            dispatch(addRegistration(name, emaill, password, id))
        },
        addRegistrationChangeName: () => {
            let name = document.querySelectorAll(".registInputVaule")[0].value
            dispatch(addRegistrationChangeName(name))
        },
        addRegistrationChangeEmail: () => {
            let email = document.querySelectorAll(".registInputVaule")[1].value
            dispatch(addRegistrationChangeEmail(email))
        },
        addRegistrationChangePassword: () => {
            let password = document.querySelectorAll(".registInputVaule")[2].value
            dispatch(addRegistrationChangePassword(password))
        },
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentLoginFormRegister);