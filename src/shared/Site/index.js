import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Home from "../../pages/Home";

const Site = ({person, setPerson, language, setLanguage}) => {
    return (
        <>
            <Header language={language} setLanguage={setLanguage} person={person} setPerson={setPerson}/>
            <main>
                <Home language={language} setLanguage={setLanguage}/>
            </main>
            <Footer language={language} setLanguage={setLanguage}/>
        </>
    );
};

export default Site;