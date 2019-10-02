export const addFriends = (id,myId) => {
    return {
        type: 'ADD_FRIENDS',
        myId: myId,
        id: id
    }
}
export const deleteFriends = (id,myId) => {
    return {
        type: 'DELETE_FRIENDS',
        myId: myId,
        id: id
    }
}
