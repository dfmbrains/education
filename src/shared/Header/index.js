import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <h2 className="header__title">Education</h2>
                    <ul className="header__menu">
                        <li>
                            <NavLink to="/">Home <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses">Courses <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/page">Page <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact <FontAwesomeIcon className="blogsItems__btn_icon" icon={faChevronDown}/></NavLink>
                        </li>
                    </ul>
                    <div className="header__sign">
                        <Button variant="text" style={{color: "#222222"}}>Sing In</Button>
                        <Button variant="contained">Sing Up</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;