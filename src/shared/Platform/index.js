import React from 'react';
import Aside from "../Aside";
import './platform.css';
import {Outlet} from "react-router-dom";
import TopBar from "../../components/TopBar";

const Main = () => {
    return (
        <article style={{display: "flex"}}>
            <Aside/>
            <main className="main">
                <TopBar/>
                <Outlet/>
            </main>
        </article>
    );
};

export default Main;