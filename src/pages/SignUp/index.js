import React, {useEffect} from 'react';
import axios from "axios";
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {Button} from "@mui/material";
import teaching from "../../assets/images/home/teaching.png";

const SignUp = ({person, setPerson, language, setLanguage}) => {

    const navigate = useNavigate();
    const createAccount = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/users',
            {
                id: null,
                email: e.target[0].value,
                password: e.target[1].value,
                name: null,
                surname: null,
                number: null,
                img: null,
                favourites: [],
                cart: [],
            }).then(({data}) => {
            setPerson({
                id: null,
                email: e.target[0].value,
                password: e.target[1].value,
                name: null,
                surname: null,
                number: null,
                img: null,
                favourites: [],
                cart: []
            });
            localStorage.setItem('email', e.target[0].value)
        }).catch(() => alert('error'))
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);

    return (
        <section>
            {
                person ? <Navigate to="/app"/>
                    :
                    <div className="account">
                        <div className="account__top">
                            <div className="account__top_title">
                                <Link to="/">Education.</Link>
                            </div>
                            <Button onClick={() => navigate('/signin')} className="account__top_btn"
                                    variant="outlined">{language ? ' Sign In' : 'Войти'}</Button>
                        </div>
                        <div className="account__row">
                            <div className="account__left">
                                <h2 className="account__title">{language ? 'Change your life with Education.' : 'Измените свою жизнь с помощью Education.'}</h2>
                                <img src={teaching} alt="teaching"/>
                            </div>
                            <div className="account__form">
                                <div className="account__form_content">
                                    <h3 className="account__form_title">{language ? 'Welcome' : 'Добро пожаловать'}</h3>
                                    <p className="account__form_subtitle">{language ? 'Lets get started with a few simple steps!' : 'Давайте начнем с нескольких простых шагов!'}</p>
                                    <form onSubmit={createAccount}>
                                        <p className="account__form_descr">E-mail*</p>
                                        <label>
                                            <input className="account__form_input" type="email" placeholder="Email"/>
                                        </label>
                                        <p className="account__form_descr">{language ? 'Password' : 'Пароль'}*</p>
                                        <label>
                                            <input className="account__form_input" type="password"
                                                   placeholder={language ? 'Password' : 'Пароль'}/>
                                        </label>
                                        <Button variant="contained" className="account__form_btn"
                                                type="submit">{language ? 'Sign Up!' : 'Зарегистрироваться!'}</Button>
                                    </form>
                                    <p className="account__subtitle">{language ? 'Have an account?' : 'Нет аккаунта?'}<Link
                                        to='/signin'>{language ? ' Sign In' : 'Войти'}</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
};

export default SignUp;