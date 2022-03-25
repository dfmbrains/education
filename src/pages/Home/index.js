import React, {useEffect, useState} from 'react';
import './home.css';
import 'remixicon/fonts/remixicon.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {Button} from "@mui/material";
import coursesImg from '../../assets/images/home/courses.png';
import instructors from '../../assets/images/home/instructors.png';
import stories from '../../assets/images/home/stories.png';
import about from '../../assets/images/home/about.png';
import online from '../../assets/images/home/online.png';
import notes from '../../assets/images/home/notes.png';
import sessions from '../../assets/images/home/sessions.png';
import support from '../../assets/images/home/support.png';
import reviews from '../../assets/images/home/reviews.png';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import JSON_API from '../../api/index';

const Home = ({language, setLanguage}) => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        axios(`${JSON_API}/courses`)
            .then(({data}) => setCourse(data))
    }, []);

    const navigate = useNavigate();
    return (
        <>
            <section className="firstScreen">
                <div className="container">
                    <div className="firstScreen__content">
                        <h1 className="firstScreen__title">{language ? 'Self-Paced Learning Courses Online' : 'Курсы Самостоятельного Обучения Онлайн'}</h1>
                        <p className="firstScreen__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Amet, vestibulum euismod nullam elementum. Urna, posuere <br/> nisi sit gravida massa.
                            Ultrices
                            bibendum sagittis pellentesque vitae sit.</p>
                        <Button variant="contained"
                                onClick={() => navigate('/app')}>{language ? 'Start a courses' : 'Начать курсы'}</Button>
                    </div>
                    <div className="firstScreen__box">
                        <div className="firstScreen__item">
                            <img src={coursesImg} alt="courses"/>
                            <div>
                                <p className="firstScreen__item_stats">1400+</p>
                                <p className="firstScreen__item_title">{language ? 'Online Courses' : 'Онлайн Курсы'}</p>
                            </div>
                        </div>
                        <div className="firstScreen__item">
                            <img src={instructors} alt="instructors"/>
                            <div>
                                <p className="firstScreen__item_stats">1100+</p>
                                <p className="firstScreen__item_title">{language ? 'Expert Instructors' : 'Инструкторы'}</p>
                            </div>
                        </div>
                        <div className="firstScreen__item">
                            <img src={stories} alt="stories"/>
                            <div>
                                <p className="firstScreen__item_stats">800+</p>
                                <p className="firstScreen__item_title">{language ? 'Stories' : 'Отзывов'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="about__row">
                        <div className="about__left">
                            <h2 className="section__title">{language ? 'Find Your Course That Makes Bright Future' : 'Найдите Свой Курс, Который Создает Светлое Будущее'}</h2>
                            <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ultricies at diam magnis faucibus et faucibus gravida. malesuada fauci bus iaculis eu.
                                Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam
                                aliquam nisl. Auctor eros, iaculis quam nisi, </p>
                            <p className="about__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                et hendrerit euismod fusce sit. </p>
                            <Button onClick={() => navigate('/app')} variant="contained">{language ? 'Learn More' : "Узнать больше"}</Button>
                        </div>
                        <div className="about__right">
                            <img src={about} alt="about"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work">
                <div className="container">
                    <h2 className="section__title">{language ? 'How It Work' : "Принцип работы"}</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. <br/> Aliquam et
                        hendrerit euismod fusce sit. </p>
                    <div className="work__row">
                        <div className="work__card">
                            <img src={online} alt="online"/>
                            <h3 className="work__card_title">{language ? 'Learn More Online' : 'Узнать больше онлайн'}</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={notes} alt="notes"/>
                            <h3 className="work__card_title">{language ? 'Writing Notes' : 'Написание Заметок'}</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={sessions} alt="sessions"/>
                            <h3 className="work__card_title">{language ? 'Interactive Sessions' : 'Интерактивные Сессии'}</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={support} alt="support"/>
                            <h3 className="work__card_title">{language ? 'Life Time Support' : 'Пожизненная поддержка'}</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="courses">
                <div className="container">
                    <h2 className="section__title">{language ? 'Our All The Online Courses' : 'Все Наши Онлайн-Курсы'}</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
                        mauris non dictumst in <br/> leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="courses__row">
                        {
                            courses.map((item) => (
                                <div onClick={() => navigate(`/app/store/${item.title.toLowerCase()}`)}
                                     className="courses__card">
                                    <img src={item.imgUrl} alt={item.title}/>
                                    <div className="courses__card_items">
                                        <div>
                                            <i className="ri-user-line"/>
                                            <p>5.8k</p>
                                        </div>
                                        <div>
                                            <i className="ri-eye-line"/>
                                            <p>69k</p>
                                        </div>
                                        <div>
                                            <i className="ri-star-line"/>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <div className="courses__card_row">
                                        <h3>{item.title}</h3>
                                        <p>{language ? `${item.price}$` : `${item.price * 100} руб.`}</p>
                                    </div>
                                    <p className="courses__card_subtitle">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                    <Button onClick={() => navigate('/app/store')} variant="contained"
                            className="courses__button">{language ? 'View All Course' : 'Просмотреть все курсы'}</Button>
                </div>
            </section>
            <section className="statistics">
                <div className="container">
                    <div className="statistics__row">
                        <div className="statistics__card">
                            <p>85+</p>
                            <p>{language ? 'Teachers' : 'Учителя'}</p>
                        </div>
                        <div className="statistics__card">
                            <p>850+</p>
                            <p>{language ? 'Students' : 'Студенты'}</p>
                        </div>
                        <div className="statistics__card">
                            <p>55+</p>
                            <p>{language ? 'Courses' : 'Курсы'}</p>
                        </div>
                        <div className="statistics__card">
                            <p>25+</p>
                            <p>{language ? 'Country' : 'Страна'}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="reviews">
                <div className="container">
                    <h2 className="section__title">{language ? 'What Our Students Say' : 'Что Говорят Наши Студенты'}</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
                        mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
                    <div className="reviews__swiper">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={25}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.
                                    </p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis
                                        arcu iaculis egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">{language ? 'UI/UX Student' : 'Студент UI/UX'}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="reviews__form">
                        <h3 className="reviews__form_title">{language ? 'What Our Students Say' : 'Что Говорят Наши Студенты'}</h3>
                        <p className="reviews__form_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Placerat <br/> mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
                        <form>
                            <label>
                                <input type="email"
                                       placeholder={language ? 'Enter your email...' : 'Напишите вашу почту...'}/>
                            </label>
                            <Button variant="contained">{language ? 'Subscribe' : 'Подписаться'}</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;