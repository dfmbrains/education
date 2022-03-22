import React, {useEffect, useState} from 'react';
import {NavLink, useNavigate, Link} from 'react-router-dom';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";
import axios from "axios";

const Header = ({person, setPerson, language, setLanguage, burger, setBurger}) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setCourses(data))
    }, []);
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <h2 className="header__title">Education.</h2>
                    <ul className={burger ? 'header__menu_active' : 'header__menu'}>
                        <li>
                            <NavLink onClick={() => setBurger(false)} to="/">{language ? 'Home' : 'Домашняя страница'}
                                <FontAwesomeIcon
                                    className="blogsItems__btn_icon"
                                    icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <Link onClick={() => setBurger(false)} to="/app/store">{language ? 'Courses' : 'Наши курсы'}
                                <FontAwesomeIcon
                                    className="blogsItems__btn_icon"
                                    icon={faChevronDown}/></Link>
                            <div className="header__menu_dropdown">
                                {
                                    courses.map((item) => (
                                        <Link to={`/app/store/${item.title.toLowerCase()}`}>{item.title}</Link>
                                    ))
                                }
                            </div>
                        </li>
                        <li>
                            <Link onClick={() => setBurger(false)} to="/app">{language ? 'Page' : 'Страницы'}
                                <FontAwesomeIcon
                                    className="blogsItems__btn_icon"
                                    icon={faChevronDown}/></Link>
                            <div className="header__menu_dropdown">
                                <Link to="/app">{language ? 'Welcome!' : 'Добро пожаловать!'}</Link>
                                <Link to="/app/store">{language ? 'Course Store' : 'Магазин курсов'}</Link>
                                <Link to="/app/courses">{language ? 'Your Courses' : 'Ваши курсы'}</Link>
                                <Link to="/signin">{language ? 'Sign In' : 'Войти'}</Link>
                                <Link to="/signup">{language ? 'Sign Up' : 'Зарегистрироваться'}</Link>
                                <Link to="/app/settings">{language ? 'Settings' : 'Настройки'}</Link>
                            </div>
                        </li>
                        <li>
                            <a onClick={() => setBurger(false)} href="#footer">{language ? 'Contacts' : 'Контакты'}
                                <FontAwesomeIcon
                                    className="blogsItems__btn_icon"
                                    icon={faChevronDown}/></a>
                        </li>
                        <div className="tools__language" onClick={() => setLanguage(!language)}>
                            <p>{!language ? 'EN' : 'RU'}</p>
                        </div>
                    </ul>
                    {
                        !person ? <>
                                <div className="header__sign">
                                    <Button onClick={() => navigate('/signin')} variant="text"
                                            style={{color: "#222222"}}>{language ? 'Sign In' : 'Войти'}</Button>
                                    <Button onClick={() => navigate('/signup')}
                                            variant="contained">{language ? 'Sign Up' : 'Новый'}</Button>
                                </div>
                            </>
                            : ''
                    }
                    <div onClick={() => setBurger(!burger)} className="header__burger">
                        <i className="ri-menu-line"/>
                        <div style={{display: `${burger ? 'block' : 'none'}`}} className="header__burger_layout"></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;