import {combineReducers, createStore} from "redux";
import reducerUser from "../reducer/mini-reducer/user-reducer";

let reducers = combineReducers({
    reducerUser: reducerUser,
});
let store = createStore(reducers);


export default store;
