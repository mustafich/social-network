import React, {Fragment} from 'react';
import "./style/header-top-fixed.css"
import ExitContainer from "../header-account/exit/conatinerExit";
import {Link} from "react-router-dom";


const HeaderTopFixed = () => {

    return (
        <Fragment>
            <div className="header">
                <div className="container">
                    <div className="header-block">
                        <div className="header-block_logo">
                            <span><Link to="/social-network">Social Network</Link></span>
                        </div>
                        <div className="header-block_account">
                            <ExitContainer/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default HeaderTopFixed