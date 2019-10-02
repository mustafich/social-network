import React from "react"

const FriendsFilter = ({registeredUsers,dispatch,user})=> {
    let friends = registeredUsers.map((friend) => {
        let friendsFilter = user.friends;
        for (let i = 0; i < friendsFilter.length; i++) { // выведет 0, затем 1, затем 2
            if (friend.id == friendsFilter[i]) {
                return (
                    <div key={friend.id} className="friends-block_box">
                        <div className="friends-block_box__userPhoto">
                            <img src={friend.photo} alt=""/>
                        </div>
                        <div className="friends-block_box__userName">
                            <p>{friend.name}</p>
                        </div>
                        <div className="friends-block_box__userFamily">
                            <p>{user.family}</p>
                        </div>
                        <div className="friends-block_box__userButton">
                            <button onClick={() => {
                                dispatch(user.id, friend.id)
                            }}>Добавить в друзья
                            </button>
                        </div>
                    </div>
                )
            }
        }
    })
    return (
        <div>{friends}</div>

    )
}
export default FriendsFilter