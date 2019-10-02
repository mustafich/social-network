import React from "react"
import "./css/exit.css"
import {Route} from "react-router-dom";



const Exit = ({user,dispatch})=>{
    return (
        <Route render={({ history}) => (
            <div className="exit">
                <div onClick={() => { history.push(`/MyPage/${user.id}`) }} className="exit">
                    <div  className="exit-block">
                        <div className="exit-block_photo">
                            <img src={user.photo} alt=""/>
                        </div>
                        <div className="exit-block_name">
                            {user.name}
                        </div>
                    </div>
                </div>
                <div onClick={()=>dispatch(user.id)} className="exitEnd">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
            </div>

        )} />

    )
}
export default Exit