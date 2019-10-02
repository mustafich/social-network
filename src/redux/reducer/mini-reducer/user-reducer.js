const initialState = {
    registered: [
        {
            id: 0,
            name: "admin",
            email: "admin@gmail.com",
            password: "admin",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "admin",
            data: "01.07.1997",
            photo: "https://image.flaticon.com/icons/png/512/97/97895.png",
            online: false,
            friends: [1,3],
            color: "#4a76a8",
            photoAll:[
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://bmem.ru/wp-content/uploads/2019/04/kotozavr.jpg",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
                "https://content.freelancehunt.com/profile/photo/225/SiteStroi.png",
            ],
            video:{}
        },
        {
            id: 1,
            name: "Кирилл",
            email: "dima@gmail.com",
            password: "мусорка",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Дмитривич",
            data: "01.07.1992",
            photo: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX10797556.jpg",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 2,
            name: "Олег",
            email: "dima@gmail.com",
            password: "Олег",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Вареник",
            data: "01.07.1992",
            photo: "data:image/jpeg;base64,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",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 3,
            name: "Оля",
            email: "dima@gmail.com",
            password: "Оля",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Полька",
            data: "01.07.1992",
            photo: "https://i.obozrevatel.com/gallery/2019/4/17/7ab10cae-de31-4df2-9a7d-33501c8dcf2e.jpg",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 4,
            name: "Юра",
            email: "dima@gmail.com",
            password: "Юра",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Пуля",
            data: "01.07.1992",
            photo: "https://i.pinimg.com/originals/1e/21/3b/1e213b6eb3a20e116ad92f73fe8e9ac7.jpg",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 5,
            name: "Ваня",
            email: "dima@gmail.com",
            password: "Ваня",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Вазилин",
            data: "01.07.1992",
            photo: "https://i.pinimg.com/474x/d7/93/f7/d793f74bd7c7ce93405f3b221897e717.jpg",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 6,
            name: "Антон",
            email: "dima@gmail.com",
            password: "Антон",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Картошка",
            data: "01.07.1992",
            photo: "http://1.bp.blogspot.com/-3frVYjQyaqE/VeG5RBg31CI/AAAAAAAARss/WkURx_L7f84/s1600/1320176286_administrator.png",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 7,
            name: "Лера",
            email: "dima@gmail.com",
            password: "Юля",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Лоток",
            data: "01.07.1992",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXBjVQRDyKZpg6H3nqY7m6tkAOTqmH3xYnc0lsjOs6MPUuj-HTQ",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 8,
            name: "Максим",
            email: "dima@gmail.com",
            password: "Максим",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Вантус",
            data: "01.07.1992",
            photo: "https://storage.googleapis.com/multi-static-content/previews/artage-io-thumb-7608f0899a82dd96e87619aea24aa3f5.png",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 9,
            name: "Петя",
            email: "dima@gmail.com",
            password: "Максим",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Шметя",
            data: "01.07.1992",
            photo: "http://s1.iconbird.com/ico/0612/general13/w400h4001339788877administrator.png",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 10,
            name: "Люда",
            email: "dima@gmail.com",
            password: "Максим",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Карась",
            data: "01.07.1992",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUN4V7sljbj4inmxpW7W6l_gYwf7Ahc0SRlVdgVIEZ-6Sp9_Qdg",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
        {
            id: 11,
            name: "Берцелиус",
            email: "dima@gmail.com",
            password: "Максим",
            from: "Украина",
            city: "Харьков",
            status: "Всем привет",
            family: "Нубион",
            data: "01.07.1992",
            photo: "http://s1.iconbird.com/ico/1012/EcommerceBusinessIcons/w256h2561350822895admin256x256.png",
            online: false,
            friends: [],
            color: "#4a76a8",
            photoAll:[],
            video:{}
        },
    ],
    registeredInputName: "",
    registeredInputEmail: "",
    registeredInputPassword: "",
    userClick: null
};

const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REGISTRATION_USER':
            let userRegistrationId = action.userRegistrationId
            let userRegistrationName = action.userRegistrationName
            let userRegistrationEmail = action.userRegistrationEmail
            let userRegistrationPassrord = action.userRegistrationPassrord
            return {
                ...state,
                registered: [...state.registered, {
                    id: userRegistrationId,
                    name: userRegistrationName,
                    email: userRegistrationEmail,
                    password: userRegistrationPassrord,
                    from: "",
                    city: "",
                    status: "",
                    family: "",
                    online: false,
                    data: "",
                    photo: "https://image.flaticon.com/icons/png/512/97/97895.png",
                    friends: [],
                    color: "#4a76a8",
                    photoAll:[],
                    video:{}
                }],
                registeredInputName: "",
                registeredInputEmail: "",
                registeredInputPassword: "",
                userClick: null
            };
        case "ADD_REGISTRATION_CHANGE_NAME":

            let addRegistrationChangeName = action.addRegistrationChangeName
            return {
                ...state,
                registeredInputName: addRegistrationChangeName
            }
        case "ADD_REGISTRATION_CHANGE_EMAIL":

            let addRegistrationChangeEmail = action.addRegistrationChangeEmail
            return {
                ...state,
                registeredInputEmail: addRegistrationChangeEmail
            }
        case "ADD_REGISTRATION_CHANGE_PASSWORD":

            let addRegistrationChangePassword = action.addRegistrationChangePassword
            return {
                ...state,
                registeredInputPassword: addRegistrationChangePassword
            }
        case "USER_ONLINE":
            let online = action.online
            let id = action.id

            return {
                ...state,
                registered: state.registered.map(user => {
                    if (user.id === id) {
                        return {
                            ...user,
                            online: online,
                        }
                    }
                    return user;
                })
            };
        case "ADD_FRIENDS":
            let myId = action.myId
            let friends = action.id
            let addUser = state.registered.map((user) => {
                    if (user.id === friends) {
                        user.friends.push(myId)
                        state.registered[myId].friends.push(friends)
                    }


                    //
                    // if (user.id === friends) {
                    //     if(item!==friends) {
                    //         user.friends.push(myId)
                    //         state.registered[myId].friends.push(friends)
                    //     }
                    // }
                    // if (item === friends) {
                    //     object.splice(index, 1);
                    // }

                return user
            })
            return {
                ...state,
                registered: addUser


            }
        case "DELETE_FRIENDS":
            return{
                ...state,
                registered:state.registered.map((user)=>{
                    if (user.id===action.myId) {
                       let deleteArr = user.friends.filter((item)=>{
                            return item!==action.id
                        })
                        state.registered[action.myId].friends = deleteArr

                    }
                    if (user.id===action.id) {
                        let deleteArrFriends = user.friends.filter((item)=>{
                            return item!==action.myId
                        })
                        state.registered[action.id].friends = deleteArrFriends
                    }
                    return user
                })
            }
        case "ADD_EXIT":
            return {
                ...state,
                registered: state.registered.map(user => {

                    if (user.id === action.id) {
                        user.online = false
                        return user
                    }
                    return user;
                })
            }
        case "EDIT_USER_MODIFIED_VALUE":

            return {
                ...state,
                registered: state.registered.map(user => {
                    let modify = action.modifiedValue
                    let text = action.text

                    if (user.id === action.id) {
                        user[text] = modify
                        return user
                    }
                    return user;
                })
            }
        case "ADD_USER_CLICK":
            return {
                ...state,
                userClick: action.obg
            }
        case "ADD_PHOTO_ALL":
            return {
                ...state,
                registered: state.registered.map(user => {
                    if (user.id === action.myId) {
                        user.photoAll.push(action.photo)
                        return user
                    }
                    return user;
                })
            }
        case "DELETE_PHOTO_ALL":
            return {
                ...state,
                registered: state.registered.map(user => {
                    if (user.id === action.myId) {
                        let newArr = user.photoAll.filter((item,index)=>{
                            return index !== action.photoIdDelete
                        })

                        state.registered[action.myId].photoAll=newArr
                        return user
                    }
                    return user;
                })
            }
    }
    return state
}

export default reducerUser;
