import React from "react"

const PageUser = ({state, user, dispatch, stateId}) => {

    let {addFriends,deleteFriends} = dispatch
    let buttonFriendsAddEndDel =(UserMap)=> {
        for (let i = 0; i <= user.friends.length; i++) {
            if (user.friends[i] === UserMap.id) {
                return <button onClick={() => {
                    deleteFriends(user.id,UserMap.id)
                }}>Удалить</button>
            }
        }
        return <button onClick={() => {addFriends(user.id,UserMap.id)}}>Добавить в друзья</button>
    }
    return (
        <div className="myPage">
            <div className="myPage-block">
                <div className="myPage-block_photo">
                    <img src={stateId.photo} alt=""/>
                </div>
                <div className="myPage-block_info">
                    <div className="myPage-block_info__user">
                        <div className="myPage-block_info__user___firstName">
                            <p>{stateId.name}</p>
                        </div>
                        <div className="myPage-block_info__user___lastName">
                            <p>{stateId.family}</p>
                        </div>
                    </div>
                    <div className="myPage-block_info__status">
                        <p>{stateId.status}</p>
                    </div>
                    <div className="myPage-block_info__data">
                        <p>День рождения:</p>
                        <p>{stateId.data}</p>
                    </div>
                    <div className="myPage-block_info__from">
                        <p>Страна:</p>
                        <p>{stateId.from}</p>
                    </div>
                    <div className="myPage-block_info__city">
                        <p>Город:</p>
                        <p>{stateId.city}</p>
                    </div>
                    <div className="myPage-block_info__butt">
                        {buttonFriendsAddEndDel(stateId)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageUser