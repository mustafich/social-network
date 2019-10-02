import React from "react"


const ContentVerification = (state,Component,NoComponent,dispatch=null,stateId=null)=> {

    let users = state
    let user = users.filter((user) => {
        return user.online === true
    })
    if (NoComponent===null) {

        return <Component state={users} dispatch={dispatch} user={user[0]} stateId={stateId}/>
    }
     else if (user.length === 0) {
        return <NoComponent/>


    } else if (user.length !== 0) {
        return <Component state={users} dispatch={dispatch} user={user[0]} stateId={stateId}/>
    }
}
export default ContentVerification

