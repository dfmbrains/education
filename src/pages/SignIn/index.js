import React, {useEffect} from 'react';
import axios from "axios";
import {useNavigate, Navigate, Link} from "react-router-dom";
import illustration from '../../assets/images/home/illustrtaion.png';
import {Button} from "@mui/material";
import './signin.css';
import {JSON_API} from "../../api";

const SignIn = ({setPerson, person, language, setLanguage}) => {
    const navigate = useNavigate();

    const signAccount = (e) => {
        e.preventDefault();
        axios.post(`${JSON_API}/signin`,
            {
                email: e.target[0].value,
                password: e.target[1].value,
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
            localStorage.setItem('email', e.target[0].value);
        })
            .catch(() => alert('try again'))
    };

    useEffect(() => {
        axios.get(`${JSON_API}/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);


    return (
        <section>
            {
                person
                    ? <Navigate to="/app"/>
                    : <div className="account">
                        <div className="account__top">
                            <div className="account__top_title">
                                <Link to="/">Education.</Link>
                            </div>
                            <Button onClick={() => navigate('/signup')} className="account__top_btn"
                                    variant="outlined">{language ? 'Sign Up' : 'Зарегистрироваться'}</Button>
                        </div>
                        <div className="account__row">
                            <div className="account__left">
                                <h2 className="account__title">{language ? 'Change your life with Education.' : 'Измените свою жизнь с помощью Education.'}</h2>
                                <img src={illustration} alt="illustration"/>
                            </div>
                            <div className="account__form">
                                <div className="account__form_content">
                                    <h3 className="account__form_title">{language ? 'Welcome back!' : 'С возвращением!'}</h3>
                                    <p className="account__form_subtitle">{language ? 'Please, enter your e-mail or phone number to login'
                                        : `Пожалуйста, введите свой адрес электронной почты или номер телефона для` +
                                        'входа в систему'}</p>
                                    <form onSubmit={signAccount}>
                                        <p className="account__form_descr">E-mail</p>
                                        <label>
                                            <input className="account__form_input" type="email" placeholder="Email"/>
                                        </label>
                                        <p className="account__form_descr">{language ? 'Password' : 'Пароль'}</p>
                                        <label>
                                            <input className="account__form_input" type="password" placeholder={language ? 'Password' : 'Пароль'}/>
                                        </label>
                                        <Button variant="contained" className="account__form_btn" type="submit">{language ? 'Sign\n' +
                                            '                                            in!' : 'Войти!'}</Button>
                                    </form>
                                    <p className="account__subtitle">{language ? 'Have no account?' : 'Нет аккаунта?'} <Link
                                        to='/signup'>{language ? 'Registration' : 'Регистрация'}.</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            }

        </section>
    );
};

export default SignIn;