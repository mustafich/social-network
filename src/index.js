import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/App";
import store from "./redux/reducer/reducer"
import  {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));
