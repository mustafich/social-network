
export const addPhotoAll = (myId,photo) => {
    return {
        type: 'ADD_PHOTO_ALL',
        photo:photo,
        myId:myId
    }
}
export const deletePhotoAll = (myId,photoIdDelete) => {
    return {
        type: 'DELETE_PHOTO_ALL',
        photoIdDelete:photoIdDelete,
        myId:myId
    }
}

