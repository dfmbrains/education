import React, {useEffect, useState} from 'react';
import Site from "./shared/Site";
import {Routes, Route} from 'react-router-dom';
import MyCourses from "./pages/MyCourses";
import CourseStore from "./pages/CourseStore";
import Settings from "./pages/Settings";
import Main from "./shared/Platform";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import './style/courseApp.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import axios from "axios";
import MyProduct from "./pages/MyProduct";
import "@fancyapps/ui/dist/fancybox.css";

function App() {
    const [person, setPerson] = useState({
        id: null,
        name: null,
        surname: null,
        number: null,
        email: null,
        password: null,
        img: null,
        cart: []
    });
    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);

    const [language, setLanguage] = useState(true);

    return (
        <>
            <Routes>
                <Route path="/" element={<Site language={language}
                                               setLanguage={setLanguage}
                                               person={person}
                                               setPerson={setPerson}/>}/>
                <Route path="/signin" element={<SignIn language={language}
                                                       setLanguage={setLanguage}
                                                       person={person}
                                                       setPerson={setPerson}/>}/>
                <Route path="/signup" element={<SignUp language={language}
                                                       setLanguage={setLanguage}
                                                       person={person}
                                                       setPerson={setPerson}/>}/>
                <Route path="/app" element={<Main language={language}
                                                  setLanguage={setLanguage}
                                                  person={person}
                                                  setPerson={setPerson}/>}>
                    <Route index element={<Welcome language={language}
                                                   setLanguage={setLanguage}
                                                   person={person}
                                                   setPerson={setPerson}/>}/>
                    <Route path="courses" element={<MyCourses language={language}
                                                              setLanguage={setLanguage}
                                                              person={person}
                                                              setPerson={setPerson}/>}/>
                    <Route path="store" element={<CourseStore language={language}
                                                              setLanguage={setLanguage}
                                                              person={person}
                                                              setPerson={setPerson}/>}/>
                    <Route path="settings" element={<Settings language={language}
                                                              setLanguage={setLanguage}
                                                              person={person}
                                                              setPerson={setPerson}/>}/>
                    <Route path="store/:path" element={<Product language={language}
                                                                setLanguage={setLanguage}
                                                                person={person}
                                                                setPerson={setPerson}/>}/>
                </Route>
                <Route path="/app/courses/:path" element={<MyProduct language={language}
                                                                     setLanguage={setLanguage}
                                                                     person={person}
                                                                     setPerson={setPerson}/>}/>
            </Routes>
        </>
    );
}

export default App;
