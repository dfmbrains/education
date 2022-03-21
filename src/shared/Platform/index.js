import React from 'react';
import Aside from "../Aside";
import './platform.css';
import {Navigate, Outlet} from "react-router-dom";
import TopBar from "../../components/TopBar";

const Main = ({person, setPerson}) => {
    return (
        <>
            {
                person ?
                    <article style={{display: "flex"}}>
                        <Aside/>
                        <main className="main">
                            <TopBar person={person} setPerson={setPerson}/>
                            <Outlet/>
                        </main>
                    </article>
                    : <Navigate to="/signin"/>
            }
        </>
    );
};

export default Main;