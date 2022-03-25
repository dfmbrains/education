import React, {useEffect, useState} from 'react';
import './aside.css';
import {Link, NavLink} from 'react-router-dom';
import axios from "axios";
import {JSON_API} from "../../api";

const Aside = ({language, setLanguage}) => {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        axios.get(`${JSON_API}/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]));
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
                    person.favourites ?
                        (person.favourites.length > 0
                            ? person.favourites.map((item) => (
                                <NavLink key={item.id} to={`/app/courses/${item.title.toLowerCase()}`}>
                                    <i className="ri-bookmark-fill"/>{item.title}
                                </NavLink>
                            ))
                            : '')
                        : ''
                }
            </ul>
        </aside>
    );
};

export default Aside;