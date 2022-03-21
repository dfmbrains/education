import React from 'react';
import Aside from "../Aside";
import './platform.css';
import {Navigate, Outlet} from "react-router-dom";
import TopBar from "../../components/TopBar";

const Main = ({person, setPerson, language, setLanguage}) => {
    return (
        <>
            {
                person ?
                    <article style={{display: "flex"}}>
                        <Aside language={language} setLanguage={setLanguage}/>
                        <main className="main">
                            <TopBar language={language} setLanguage={setLanguage} person={person} setPerson={setPerson}/>
                            <Outlet/>
                        </main>
                    </article>
                    : <Navigate to="/signin"/>
            }
        </>
    );
};

export default Main;