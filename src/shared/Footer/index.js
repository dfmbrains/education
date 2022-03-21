import React from 'react';
import {Link} from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__education">
                        <h2 className="footer__title">Education</h2>
                        <p className="footer__subtitle">Lorem ipsum dolor sit amet, consectetur
                            adipis <br/> cing
                            elit. Amet, vestibulum euismod nullam the <br/> elementum. Urna, posuere nisi sit gravid.
                        </p>
                        <h2 className="footer__title">Follow Us</h2>
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
                    <div className="footer__card">
                        <h2 className="footer__title">Feature Links</h2>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>About Us</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Graduation</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Scholarship</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Admissions</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>International</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Events</Link>
                    </div>
                    <div className="footer__card">
                        <h2 className="footer__title">Support</h2>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Language</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>WordPress</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Privacy</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>FAQs</Link>
                        <Link to="/"><i className="ri-arrow-right-s-line"/>Support</Link>
                    </div>
                    <div className="footer__contact">
                        <h2 className="footer__title">Contact Us</h2>
                        <p className="footer__subtitle">230,Mirpur Area, Mirpur 10, <br/> Dhaka,Bangladesh</p>
                        <div>
                            <i className="ri-phone-fill"/>
                            <a href="tel:+996700868068">+996700868068</a>
                        </div>
                        <div className="margin">
                            <i className="ri-mail-line"/>
                            <p>maxabdurasulov@gmail.com</p>
                        </div>
                        <div>
                            <i className="ri-global-line"/>
                            <a target="_blank" href="https://portfolio-flax-mu-48.vercel.app/">Link!</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;