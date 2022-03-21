import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";

const Site = ({person, setPerson}) => {
    return (
        <>
            <Header person={person} setPerson={setPerson}/>
            <main>
                <Home/>
            </main>
            <Footer/>
        </>
    );
};

export default Site;