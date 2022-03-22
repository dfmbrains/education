import React from 'react';
import {Link} from "react-router-dom";
import './footer.css';

const Footer = ({language, setLanguage}) => {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__education">
                        <h2 className="footer__title">Education.</h2>
                        <p className="footer__subtitle">Lorem ipsum dolor sit amet, consectetur
                            adipis <br/> cing elit. Amet, vestibulum euismod nullam the <br/> elementum. Urna, posuere
                            nisi sit gravid.
                        </p>
                        <h2 className="footer__title">{language ? 'Follow Us' : 'Подпишитесь на нас'}</h2>
                        <div className="footer__education_social">
                            <a target="_blank" href="https://ru-ru.facebook.com/">
                                <i className="ri-facebook-fill"/>
                            </a>
                            <a target="_blank" href="https://twitter.com/?lang=ru">
                                <i className="ri-twitter-fill"/>
                            </a>
                            <a target="_blank" href="https://www.instagram.com/">
                                <i className="ri-instagram-fill"/>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com/in/maxabdurasulov/">
                                <i className="ri-linkedin-fill"/>
                            </a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__card">
                            <h2 className="footer__title">{language ? 'Feature Links' : 'Ссылки'}</h2>
                            <Link to="/app"><i className="ri-arrow-right-s-line"/>{language ? 'About Us' : 'О нас'}
                            </Link>
                            <Link to="/"><i
                                className="ri-arrow-right-s-line"/>{language ? 'Course Store' : 'Магазин курсов'}
                            </Link>
                            <Link to="/"><i
                                className="ri-arrow-right-s-line"/>{language ? 'Your Courses' : 'Ваши курсы'}
                            </Link>
                            <Link to="/"><i className="ri-arrow-right-s-line"/>{language ? 'Settings' : 'Настройки'}
                            </Link>
                            <Link to="/"><i
                                className="ri-arrow-right-s-line"/>{language ? 'Sign In' : 'Войти'}</Link>
                            <Link to="/"><i
                                className="ri-arrow-right-s-line"/>{language ? 'Sign Up' : 'Зарегистрироваться'}</Link>
                        </div>
                        <div className="footer__contact">
                            <h2 className="footer__title">{language ? 'Contact Us' : 'Связаться С Нами'}</h2>
                            <p className="footer__subtitle">{language ? 'Ryskulova, 79B' : 'Рыскулова, 79Б'}
                                <br/> {language ? 'Kyrgyzstan, Bishkek' : 'Кыргызстан, Бишкек'}</p>
                            <div>
                                <i className="ri-phone-fill"/>
                                <a href="tel:+996700868068">+996700868068</a>
                            </div>
                            <div className="margin">
                                <i className="ri-mail-line"/>
                                <p>mail@gmail.com</p>
                            </div>
                            <div>
                                <i className="ri-global-line"/>
                                <a target="_blank" href="https://portfolio-flax-mu-48.vercel.app/">Link!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;