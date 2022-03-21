import React, {useEffect, useState} from 'react';
import './aside.css';
import {Link, NavLink} from 'react-router-dom';
import axios from "axios";

const Aside = ({language, setLanguage}) => {
    const [favCourses, setFavCourses] = useState([]);
    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setFavCourses(data))
    }, []);

    return (
        <aside className="aside">
            <div className="aside__title">
                <Link to="/">Education.</Link>
            </div>
            <ul className="aside__menu">
                <NavLink to="/app/courses">
                    <i className="ri-book-mark-fill"/>{language ? 'My courses' : 'Мои курсы'}
                </NavLink>
                <NavLink to="/app/store">
                    <i className="ri-store-line"/>{language ? 'Course store' : 'Магазин курсов'}
                </NavLink>
                <p className="aside__menu_category">{language ? 'Favorites' : 'Избранные'}</p>
                {
                    favCourses.map((item) => (
                        item.favourites
                            ? <NavLink key={item.id} to={`/app/courses/${item.title.toLowerCase()}`}>
                                <i className="ri-bookmark-fill"/>{item.title}
                            </NavLink>
                            : ''
                    ))
                }
            </ul>
        </aside>
    );
};

export default Aside;