import React from "react"
import "./css/friends.css"
import FriendsTop from "./FriendsFilter";
import AllFilter from "./AllFilter";
import FriendsMenu from "./FriendsMenu";


export default class Friends extends React.Component {
    state = {
        filter: "ALL",
        registeredUsers: this.props.state,
        user: this.props.user
    }
    newFilter = (filter) => {

        this.setState({
            filter: filter,
        })

    }
    newFilterNew = () => {

        return this.state.filter
    }
    filterMenu = () => {
        if (this.state.filter === "ALL") {
            return this.state.registeredUsers.map((user)=>{
                if(user.id===this.props.user.id){
                    user=undefined
                }
                return user
            })

        } else if (this.state.filter === "FRI") {
            return this.state.registeredUsers.map((userFri) => {
                let user = this.props.user
                for (let i = 0; i <= user.friends.length; i++) {
                    if (userFri.id == user.friends[i]) {
                        return userFri
                    }
                }
            })
        }  else if (this.state.filter === "ONLINE") {
            return this.state.registeredUsers.map((userFri) => {
                    if (userFri.online ===true) {
                        return userFri
                    }
            })
        }
    }

    render() {

        let registeredUsers = this.props.state
        let AllUsers = this.props.state
        let dispatch = this.props.dispatch
        let user = this.props.user

        return (
            <div className="friends">
                <FriendsMenu newFilterNew={this.newFilterNew} newFilter={this.newFilter}/>
                <div className="friends-block">
                    {/*<FriendsTop registeredUsers={registeredUsers} dispatch={dispatch} user={user}/>*/}
                    <AllFilter  AllUsers={AllUsers} registeredUsers={this.filterMenu()} dispatch={dispatch} user={user}/>
                </div>
            </div>
        )
    }

}


//
// const Friends = ({state, dispatch, user}) => {
//
//     let AllUser = state.map((User) => {
//         return (
//             <div key={User.id} className="friends-block_box">
//                 <div className="friends-block_box__userPhoto">
//                     <img src={User.photo} alt=""/>
//                 </div>
//                 <div className="friends-block_box__userName">
//                     <p>{User.name}</p>
//                 </div>
//                 <div className="friends-block_box__userFamily">
//                     <p>{user.family}</p>
//                 </div>
//                 <div className="friends-block_box__userButton">
//                     <button onClick={() => {
//                         dispatch(user.id, User.id)
//                     }}>Добавить в друзья
//                     </button>
//                 </div>
//             </div>
//         )
//     })
//     let friends = state.map((friend) => {
//
//         let friendsFilter = user.friends;
//
//         for (let i = 0; i < friendsFilter.length; i++) { // выведет 0, затем 1, затем 2
//             if (friend.id == friendsFilter[i]) {
//                 return (
//                     <div key={friend.id} className="friends-block_box">
//                         <div className="friends-block_box__userPhoto">
//                             <img src={friend.photo} alt=""/>
//                         </div>
//                         <div className="friends-block_box__userName">
//                             <p>{friend.name}</p>
//                         </div>
//                         <div className="friends-block_box__userFamily">
//                             <p>{user.family}</p>
//                         </div>
//                         <div className="friends-block_box__userButton">
//                             <button onClick={() => {
//                                 dispatch(user.id, friend.id)
//                             }}>Добавить в друзья
//                             </button>
//                         </div>
//                     </div>
//                 )
//             }
//         }
//
//
//     })
//
//     let filer = ()=>{
//
//         let friendsBlock = document.querySelector(".friends-menu_friends")
//         let allUserBlock = document.querySelector(".friends-menu_user")
//     }
//     setTimeout(() => filer(), 1000)
//     return (
//         <div className="friends">
//             <div className="friends-menu">
//                 <div className="friends-menu_friends activeFriends">
//                     <p>Друзья</p>
//                 </div>
//                 <div className="friends-menu_user">
//                     <p>Все пользователи</p>
//                 </div>
//             </div>
//             <div className="friends-block">
//                 {friends}
//                 {AllUser}
//             </div>
//         </div>
//     )
//
//
// }
// export default Friends


//
// let activeFriends = () => {
//     let friendsBlock = document.querySelector(".friends-menu_friends")
//     let allUserBlock = document.querySelector(".friends-menu_user")
//     friendsBlock.classList.add("activeFriends");
//     allUserBlock.classList.remove("activeFriends");
//
// }
// let activeAll = () => {
//     let friendsBlock = document.querySelector(".friends-menu_friends")
//     let allUserBlock = document.querySelector(".friends-menu_user")
//     allUserBlock.classList.add("activeFriends");
//     friendsBlock.classList.remove("activeFriends");
//     let friendsBlockAll = document.querySelectorAll(".friends-block")
// }