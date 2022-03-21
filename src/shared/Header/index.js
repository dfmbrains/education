import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";

const Header = ({person, setPerson, language, setLanguage}) => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <h2 className="header__title">Education.</h2>
                    <ul className="header__menu">
                        <li>
                            <NavLink to="/">{language ? 'Home' : 'Домашняя страница'} <FontAwesomeIcon
                                className="blogsItems__btn_icon"
                                icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses">{language ? 'Courses' : 'Наши курсы'} <FontAwesomeIcon
                                className="blogsItems__btn_icon"
                                icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/page">{language ? 'Page' : 'Страницы'} <FontAwesomeIcon
                                className="blogsItems__btn_icon"
                                icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">{language ? 'Blog' : 'Блог'} <FontAwesomeIcon
                                className="blogsItems__btn_icon"
                                icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">{language ? 'Contacts' : 'Контакты'} <FontAwesomeIcon
                                className="blogsItems__btn_icon"
                                icon={faChevronDown}/></NavLink>
                        </li>
                    </ul>
                    {
                        !person ? <>
                                <div className="header__sign">
                                    <Button onClick={() => navigate('/signin')} variant="text"
                                            style={{color: "#222222"}}>{language ? 'Sign In' : 'Войти'}</Button>
                                    <Button onClick={() => navigate('/signup')}
                                            variant="contained">{language ? 'Sign Up' : 'Выйти'}</Button>
                                </div>
                            </>
                            : ''
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;