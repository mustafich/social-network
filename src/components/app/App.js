import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import HeaderTopFixed from "../page/header/header-top-fixed/Header-top-fixed";
import Block from "../container/Block";
import Footer from "../footer/footer";
import Wrapper from "../wrapper/Wrapper";
import ContainerLeftMenuLink from "../page/left-menu/left-menu-link/ContainerLeftMenulink";
import Content from "../page/content/content";
import "../../libs/bootstrap-grid/bootstrap-grid.css"
import "../../libs/rest/reset.css"



const App = () => {
    return (
        <BrowserRouter>
            <Wrapper>
                <HeaderTopFixed/>
                <Block>
                    <ContainerLeftMenuLink/>
                    <Content/>
                </Block>
                <Footer/>
            </Wrapper>
        </BrowserRouter>

    )
}
export default App