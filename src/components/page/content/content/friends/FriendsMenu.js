import React from "react";


export default class FriendsMenu extends React.Component {

    state = {
        buttons : [
            {name:"ALL",label:"Все пользователи"},
            {name:"FRI",label:"Друзья"},
            {name:"ONLINE",label:"Онлайн"}
        ]
    }
    render() {
        const button = this.state.buttons.map(({name,label})=> {
            const isActive = this.props.newFilterNew()===name;
            const clazz = isActive?"activeFriends":""
            return (
                <div onClick={()=>this.props.newFilter(name)} className={`friends-menu_friends ${clazz}`} key={name}><p>{label}</p></div>
            )
        })
        return (
            <div className="friends-menu">
                {button}
            </div>

        )
    }
}

