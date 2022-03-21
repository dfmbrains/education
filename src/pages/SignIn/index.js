import React, {useEffect} from 'react';
import axios from "axios";
import {useNavigate, Navigate, Link} from "react-router-dom";
import illustration from '../../assets/images/home/illustrtaion.png';
import {Button} from "@mui/material";
import './signin.css';

const SignIn = ({setPerson, person}) => {
    const navigate = useNavigate();

    const signAccount = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/signin',
            {
                email: e.target[0].value,
                password: e.target[1].value,
            }).then(({data}) => {
            setPerson({
                id: null,
                email: e.target[0].value,
                password: e.target[1].value,
                cart: []
            });
            localStorage.setItem('email', e.target[0].value);
        })
            .catch(() => alert('try again'))
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
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
                                    variant="outlined">Sign Up</Button>
                        </div>
                        <div className="account__row">
                            <div className="account__left">
                                <h2 className="account__title">Change your life with Education.</h2>
                                <img src={illustration} alt="illustration"/>
                            </div>
                            <div className="account__form">
                                <div className="account__form_content">
                                    <h3 className="account__form_title">Welcome back!</h3>
                                    <p className="account__form_subtitle">Please, enter your e-mail or phone number to
                                        login</p>
                                    <form onSubmit={signAccount}>
                                        <p className="account__form_descr">E-mail</p>
                                        <label>
                                            <input className="account__form_input" type="email" placeholder="Email"/>
                                        </label>
                                        <p className="account__form_descr">Password</p>
                                        <label>
                                            <input className="account__form_input" type="password" placeholder="Password"/>
                                        </label>
                                        <Button variant="contained" className="account__form_btn" type="submit">Sign
                                            in!</Button>
                                    </form>
                                    <p className="account__subtitle">Have no account? <Link
                                        to='/signup'>Registration.</Link>
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