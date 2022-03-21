import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@mui/material";

const Header = ({person, setPerson}) => {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <h2 className="header__title">Education</h2>
                    <ul className="header__menu">
                        <li>
                            <NavLink to="/">Home <FontAwesomeIcon className="blogsItems__btn_icon"
                                                                  icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses">Courses <FontAwesomeIcon className="blogsItems__btn_icon"
                                                                            icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/page">Page <FontAwesomeIcon className="blogsItems__btn_icon"
                                                                      icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blog <FontAwesomeIcon className="blogsItems__btn_icon"
                                                                      icon={faChevronDown}/></NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact <FontAwesomeIcon className="blogsItems__btn_icon"
                                                                            icon={faChevronDown}/></NavLink>
                        </li>
                    </ul>
                    {
                        !person ? <>
                                <div className="header__sign">
                                    <Button onClick={() => navigate('/signin')} variant="text" style={{color: "#222222"}}>Sign
                                        In</Button>
                                    <Button onClick={() => navigate('/signup')} variant="contained">Sign Up</Button>
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