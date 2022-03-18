import React, {useEffect} from 'react';
import './home.css';
import 'remixicon/fonts/remixicon.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";
import {Button} from "@mui/material";
import courses from '../../assets/images/home/courses.png';
import instructors from '../../assets/images/home/instructors.png';
import stories from '../../assets/images/home/stories.png';
import about from '../../assets/images/home/about.png';
import online from '../../assets/images/home/online.png';
import notes from '../../assets/images/home/notes.png';
import sessions from '../../assets/images/home/sessions.png';
import support from '../../assets/images/home/support.png';
import html from '../../assets/images/home/html.png';
import css from '../../assets/images/home/css.png';
import javascript from '../../assets/images/home/js.png';
import react from '../../assets/images/home/react.png';
import redux from '../../assets/images/home/redux.png';
import auth from '../../assets/images/home/auth.png';
import mentor from '../../assets/images/home/mentor.png';
import event from '../../assets/images/home/event.png';
import blog from '../../assets/images/home/blog.png';
import reviews from '../../assets/images/home/reviews.png';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <section className="firstScreen">
                <div className="container">
                    <div className="firstScreen__content">
                        <h1 className="firstScreen__title">Self-Paced Learning Courses Online</h1>
                        <p className="firstScreen__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Amet, vestibulum euismod nullam elementum. Urna, posuere <br/> nisi sit gravida massa.
                            Ultrices
                            bibendum sagittis pellentesque vitae sit.</p>
                        <Button variant="contained" onClick={() => navigate('/app')}>Start a coures</Button>
                    </div>
                    <div className="firstScreen__box">
                        <div className="firstScreen__item">
                            <img src={courses} alt="courses"/>
                            <div>
                                <p className="firstScreen__item_stats">1400+</p>
                                <p className="firstScreen__item_title">Online Courses</p>
                            </div>
                        </div>
                        <div className="firstScreen__item">
                            <img src={instructors} alt="instructors"/>
                            <div>
                                <p className="firstScreen__item_stats">1100+</p>
                                <p className="firstScreen__item_title">Expert Instructors</p>
                            </div>
                        </div>
                        <div className="firstScreen__item">
                            <img src={stories} alt="stories"/>
                            <div>
                                <p className="firstScreen__item_stats">800+</p>
                                <p className="firstScreen__item_title">Success Stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="about__row">
                        <div className="about__left">
                            <h2 className="section__title">Find Your Course That Makes Bright Future</h2>
                            <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ultricies at diam magnis faucibus et faucibus gravida. malesuada fauci bus iaculis eu.
                                Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam
                                aliquam nisl. Auctor eros, iaculis quam nisi, </p>
                            <p className="about__descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                et hendrerit euismod fusce sit. </p>
                            <Button variant="contained">Learn More</Button>
                        </div>
                        <div className="about__right">
                            <img src={about} alt="about"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="work">
                <div className="container">
                    <h2 className="section__title">How It Work</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. <br/> Aliquam et
                        hendrerit euismod fusce sit. </p>
                    <div className="work__row">
                        <div className="work__card">
                            <img src={online} alt="online"/>
                            <h3 className="work__card_title">Learn More Online</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={notes} alt="notes"/>
                            <h3 className="work__card_title">Writing Notes</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={sessions} alt="sessions"/>
                            <h3 className="work__card_title">Interactive Sessions</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                        <div className="work__card">
                            <img src={support} alt="support"/>
                            <h3 className="work__card_title">Life Time Support</h3>
                            <p className="work__card_subtitle">Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                                Aliquam et hendrer it eui smod fusce sit.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="courses">
                <div className="container">
                    <h2 className="section__title">Our All The Online Courses</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
                        mauris non dictumst in <br/> leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="courses__row">
                        <div className="courses__card">
                            <img src={html} alt="html"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="courses__card">
                            <img src={css} alt="css"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="courses__card">
                            <img src={javascript} alt="javascript"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="courses__card">
                            <img src={react} alt="react"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="courses__card">
                            <img src={redux} alt="redux"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="courses__card">
                            <img src={auth} alt="auth"/>
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
                                <h3>Development</h3>
                                <p>$150</p>
                            </div>
                            <p className="courses__card_subtitle">Lorem ipsum dolor sit amet, consecte adipiscing elit.
                                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                    <Button variant="contained" className="courses__button">View All Course</Button>
                </div>
            </section>
            <section className="mentor">
                <div className="container">
                    <h2 className="section__title">Meet with Our Mentor</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
                        vestibulum <br/> euismod nullam elementum. Urna, posuere nisi sit gravida massa.</p>
                    <div className="mentor__row">
                        <div className="mentor__card">
                            <img src={mentor} alt="mentor"/>
                            <div className="mentor__card_content">
                                <h3 className="mentor__card_name">Mohammod Ali</h3>
                                <p className="mentor__card_subtitle">CEO, Developer</p>
                                <div className="mentor__card_stats">
                                    <div className="mentor__card_stats-left">
                                        <div>
                                            <i className="ri-user-line"/>
                                            <p>8.2k</p>
                                        </div>
                                        <div>
                                            <i className="ri-star-line"/>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <p className="mentor__card_stats-right">25+ Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="mentor__card">
                            <img src={mentor} alt="mentor"/>
                            <div className="mentor__card_content">
                                <h3 className="mentor__card_name">Mohammod Ali</h3>
                                <p className="mentor__card_subtitle">CEO, Developer</p>
                                <div className="mentor__card_stats">
                                    <div className="mentor__card_stats-left">
                                        <div>
                                            <i className="ri-user-line"/>
                                            <p>8.2k</p>
                                        </div>
                                        <div>
                                            <i className="ri-star-line"/>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <p className="mentor__card_stats-right">25+ Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="mentor__card">
                            <img src={mentor} alt="mentor"/>
                            <div className="mentor__card_content">
                                <h3 className="mentor__card_name">Mohammod Ali</h3>
                                <p className="mentor__card_subtitle">CEO, Developer</p>
                                <div className="mentor__card_stats">
                                    <div className="mentor__card_stats-left">
                                        <div>
                                            <i className="ri-user-line"/>
                                            <p>8.2k</p>
                                        </div>
                                        <div>
                                            <i className="ri-star-line"/>
                                            <p>4.5</p>
                                        </div>
                                    </div>
                                    <p className="mentor__card_stats-right">25+ Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="event">
                <div className="container">
                    <h2 className="section__title">Upcoming Event</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. <br/> Amet, vestibulum euismod nullam elementum.</p>
                    <div className="event__row">
                        <div className="event__card">
                            <img src={event} alt="event"/>
                            <div className="event__card_content">
                                <h3 className="event__card_title">TED Talks at UCF College of Education</h3>
                                <div className="event__card_info">
                                    <div>
                                        <i className="ri-time-line"/>
                                        <p>4.00 pm - 8.00 pm</p>
                                    </div>
                                    <div>
                                        <i className="ri-map-pin-line"/>
                                        <p>Dhaka Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="event__card_date">
                                <p>10 <br/> APR</p>
                            </div>
                        </div>
                        <div className="event__card">
                            <img src={event} alt="event"/>
                            <div className="event__card_content">
                                <h3 className="event__card_title">TED Talks at UCF College of Education</h3>
                                <div className="event__card_info">
                                    <div>
                                        <i className="ri-time-line"/>
                                        <p>4.00 pm - 8.00 pm</p>
                                    </div>
                                    <div>
                                        <i className="ri-map-pin-line"/>
                                        <p>Dhaka Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="event__card_date">
                                <p>10 <br/> APR</p>
                            </div>
                        </div>
                        <div className="event__card">
                            <img src={event} alt="event"/>
                            <div className="event__card_content">
                                <h3 className="event__card_title">TED Talks at UCF College of Education</h3>
                                <div className="event__card_info">
                                    <div>
                                        <i className="ri-time-line"/>
                                        <p>4.00 pm - 8.00 pm</p>
                                    </div>
                                    <div>
                                        <i className="ri-map-pin-line"/>
                                        <p>Dhaka Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="event__card_date">
                                <p>10 <br/> APR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="statistics">
                <div className="container">
                    <div className="statistics__row">
                        <div className="statistics__card">
                            <p>85+</p>
                            <p>Teachers</p>
                        </div>
                        <div className="statistics__card">
                            <p>850+</p>
                            <p>Students</p>
                        </div>
                        <div className="statistics__card">
                            <p>55+</p>
                            <p>Courses</p>
                        </div>
                        <div className="statistics__card">
                            <p>25+</p>
                            <p>Country</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog">
                <div className="container">
                    <h2 className="section__title">Our Latest Blog</h2>
                    <p className="section__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. <br/> Amet, vestibulum euismod nullam at entum.</p>
                    <div className="blog__row">
                        <div className="blog__card">
                            <img src={blog} alt="blog"/>
                            <div className="blog__card_content">
                                <h3 className="blog__card_title">Product Marketing Creative Camping Brand Image</h3>
                                <p className="blog__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing
                                    elit.
                                    Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.</p>
                                <Button variant="text">View More...</Button>
                            </div>
                        </div>
                        <div className="blog__card">
                            <img src={blog} alt="blog"/>
                            <div className="blog__card_content">
                                <h3 className="blog__card_title">Product Marketing Creative Camping Brand Image</h3>
                                <p className="blog__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing
                                    elit.
                                    Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.</p>
                                <Button variant="text">View More...</Button>
                            </div>
                        </div>
                        <div className="blog__card">
                            <img src={blog} alt="blog"/>
                            <div className="blog__card_content">
                                <h3 className="blog__card_title">Product Marketing Creative Camping Brand Image</h3>
                                <p className="blog__card_subtitle">Lorem ipsum dolor sit amet, consectetur adipis cing
                                    elit.
                                    Amet, vestibulum euismod nullam at entum. Urna, posuere nisi sit gravida massa.</p>
                                <Button variant="text">View More...</Button>
                            </div>
                        </div>
                    </div>
                    <Button className="blog__button" variant="contained">View All</Button>
                </div>
            </section>
            <section className="reviews">
                <div className="container">
                    <h2 className="section__title">What Our Students Say</h2>
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
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="reviews__card">
                                    <p className="reviews__card_content">Lorem ipsum dolor sit amet, consec tetur
                                        adipiscing
                                        elit. Placerat <br/> mauris non dictumst in leo etiam. Proin iaculis arcu
                                        iaculis
                                        egestas.</p>
                                    <div className="reviews__card_info">
                                        <img src={reviews} alt="reviews"/>
                                        <div>
                                            <h3 className="reviews__card_name">Jony Ahmed</h3>
                                            <p className="reviews__card_subtitle">UI/UX Student</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="reviews__form">
                        <h3 className="reviews__form_title">What Our Students Say</h3>
                        <p className="reviews__form_subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat <br/> mauris non dictumst in leo. Lorem ipsum dolor sit amet.</p>
                        <form>
                            <label>
                                <input type="email" placeholder="Enter your email..."/>
                            </label>
                            <Button variant="contained">Subscribe</Button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;