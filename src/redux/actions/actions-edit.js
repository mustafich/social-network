
export const editUserSettings = (modifiedValue,id,text) => {
    return {
        type: 'EDIT_USER_MODIFIED_VALUE',
        modifiedValue:modifiedValue,
        id:id,
        text:text
    }
}

