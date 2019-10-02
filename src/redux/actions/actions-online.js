export const actionOnlineUser = (onlineUser,id)=>{
    return(
        {type:"USER_ONLINE",online:onlineUser,id:id}
    )
}