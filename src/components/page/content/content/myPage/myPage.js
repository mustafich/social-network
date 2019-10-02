import React from "react";
import "./css/myPage.css"




const MyPage = ({user}) => {

    return (
        <div className="myPage">
            <div className="myPage-block">
                <div className="myPage-block_photo">
                    <img src={user.photo} alt=""/>

                </div>
                <div className="myPage-block_info">
                    <div className="myPage-block_info__user">
                        <div className="myPage-block_info__user___firstName">
                            <p>{user.name}</p>
                        </div>
                        <div className="myPage-block_info__user___lastName">
                            <p>{user.family}</p>
                        </div>
                    </div>
                    <div className="myPage-block_info__status">
                        <p>{user.status}</p>
                    </div>
                    <div className="myPage-block_info__data">
                        <p>Дата рождения:</p>
                        <p>{user.data}</p>
                    </div>
                    <div className="myPage-block_info__from">
                        <p>Страна:</p>
                        <p>{user.from}</p>
                    </div>
                    <div className="myPage-block_info__city">
                        <p>Город:</p>
                        <p>{user.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage
