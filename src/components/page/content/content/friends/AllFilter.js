import React from "react"
import {Route} from "react-router-dom";


const AllFilter = ({registeredUsers, dispatch, user}) => {
    let {addFriends,deleteFriends,addUserClick} = dispatch
    let friendsUsers = registeredUsers.filter(function (x) {
        return x !== undefined
    });
    let buttonFriendsAddEndDel = (UserMap) => {
        for (let i = 0; i <= user.friends.length; i++) {
            if (user.friends[i] === UserMap.id) {
                return <button onClick={() => {
                    deleteFriends(user.id, UserMap.id)
                }}>Удалить</button>
            }
        }
        return <button onClick={() => {
            addFriends(user.id, UserMap.id)
        }}>Добавить в друзья</button>
    }

    let AllUser = friendsUsers.map((User) => {
        return (
            <Route key={User.id} render={({history}) => (
                <div onClick={(event) => {
                    if (event.target.tagName !== "BUTTON") {
                        history.push(`/PageUser/${User.id}`)
                        addUserClick(User)
                    }
                }} key={User.id} className="friends-block_box">
                    <div className="friends-block_box__userPhoto">
                        <img src={User.photo} alt=""/>
                    </div>
                    <div className="friends-block_box__userName">
                        <p>{User.name}</p>
                    </div>
                    <div className="friends-block_box__userFamily">
                        <p>{User.family}</p>
                    </div>
                    <div className="friends-block_box__userButton">
                        {buttonFriendsAddEndDel(User)}
                    </div>
                </div>
            )}/>
        )
    })

    return (
        <React.Fragment>
            {AllUser}
        </React.Fragment>

    )
}
export default AllFilter