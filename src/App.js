import React from 'react';
import Site from "./shared/Site";
import {Routes, Route} from 'react-router-dom';
import MyCourses from "./pages/MyCourses";
import CourseStore from "./pages/CourseStore";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import Main from "./shared/Platform";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Site/>}/>
                <Route path="/app" element={<Main/>}>
                    <Route index element={<Welcome/>}/>
                    <Route path="courses" element={<MyCourses/>}/>
                    <Route path="store" element={<CourseStore/>}/>
                    <Route path="favorites" element={<Favorites/>}/>
                    <Route path="settings" element={<Settings/>}/>
                    <Route path="store/:path" element={<Product/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
