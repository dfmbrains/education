import React, {useState} from 'react';
import './aside.css';
import {Link, NavLink} from 'react-router-dom';

const Aside = () => {
    return (
        <aside className="aside">
            <div className="aside__title">
                <Link to="/">Education.</Link>
            </div>
            <ul className="aside__menu">
                <NavLink to="/app/courses">
                    <i className="ri-book-mark-fill"/>My courses
                </NavLink>
                <NavLink to="/app/store">
                    <i className="ri-store-line"/>Course store
                </NavLink>
                <p className="aside__menu_category">Favorites (1)</p>
                <NavLink to="/app/favorites">
                    <i className="ri-bookmark-fill"/>JavaScript
                </NavLink>
                <NavLink className="aside__settings" to="/app/settings">
                    <i className="ri-settings-5-fill"/>Settings
                </NavLink>
            </ul>
        </aside>
    );
};

export default Aside;