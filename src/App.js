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
        cart: []
    });
    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Site person={person} setPerson={setPerson}/>}/>
                <Route path="/signin" element={<SignIn person={person} setPerson={setPerson}/>}/>
                <Route path="/signup" element={<SignUp person={person} setPerson={setPerson}/>}/>
                <Route path="/app" element={<Main person={person} setPerson={setPerson}/>}>
                    <Route index element={<Welcome person={person} setPerson={setPerson}/>}/>
                    <Route path="courses" element={<MyCourses person={person} setPerson={setPerson}/>}/>
                    <Route path="store" element={<CourseStore person={person} setPerson={setPerson}/>}/>
                    <Route path="settings" element={<Settings person={person} setPerson={setPerson}/>}/>
                    <Route path="store/:path" element={<Product person={person} setPerson={setPerson}/>}/>
                </Route>
                <Route path="/app/courses/:path" element={<MyProduct person={person} setPerson={setPerson}/>}/>
            </Routes>
        </>
    );
}

export default App;
