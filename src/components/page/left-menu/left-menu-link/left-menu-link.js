import React from "react"
import "./css/left-menu-link.css"
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";

const LeftMenuLink = ({state, user}) => {


    function wievI() {
        if (user === undefined) {
            return <i className="fa fa-lock" aria-hidden="true"></i>
        } else {
            if (user.online) {
                return <i className="fa fa-unlock" aria-hidden="true"></i>
            } else {
                return <i className="fa fa-lock" aria-hidden="true"></i>
            }
        }

    }

    return (
        <div className="left">
            <div className="left-menu">
                <Route render={({history}) => (<a onClick={() => {
                    let user = state.find((user) => user.online === true);
                    if (user !== undefined) {
                        history.push(`/MyPage/${user.id}`)
                    } else {
                        history.push(`/MyPage/`)
                    }
                }}>Моя страница {wievI()} </a>)}/>
                <Link to="/messages/">Сообщения <i className="fa fa-lock" aria-hidden="true"></i></Link>
                <Link to="/friends/">Друзья {wievI()}</Link>
                <Link to="/groups/">Группы <i className="fa fa-lock" aria-hidden="true"></i></Link>
                <Link to="/photo/">Фотографии {wievI()}</Link>
                <Link to="/music/">Музыка <i className="fa fa-lock" aria-hidden="true"></i></Link>
                <Link to="/video/">Видео <i className="fa fa-lock" aria-hidden="true"></i></Link>
                <Link to="/games/">Игры {wievI()}</Link>
                <Link className="settings" to="/settings">Настройки {wievI()}</Link>
            </div>
        </div>
    )
}

export default LeftMenuLink