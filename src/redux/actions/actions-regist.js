export const addRegistration = (userRegistrationName, userRegistrationEmail, userRegistrationPassrord,userRegistrationId) => {
    return {
        type: 'ADD_REGISTRATION_USER',
        userRegistrationId:userRegistrationId,
        userRegistrationName: userRegistrationName,
        userRegistrationEmail: userRegistrationEmail,
        userRegistrationPassrord: userRegistrationPassrord
    }
};
export const addRegistrationChangeName = (name) => {
    return {
        type: 'ADD_REGISTRATION_CHANGE_NAME',
        addRegistrationChangeName: name
    }
};
export const addRegistrationChangeEmail = (email) => {
    return {
        type: 'ADD_REGISTRATION_CHANGE_EMAIL',
        addRegistrationChangeEmail: email
    }
};
export const addRegistrationChangePassword = (password) => {
    return {
        type: 'ADD_REGISTRATION_CHANGE_PASSWORD',
        addRegistrationChangePassword: password
    }
};