import React, {useEffect} from 'react';
import axios from "axios";
import {Link, useNavigate, Navigate} from 'react-router-dom';
import {Button} from "@mui/material";
import teaching from "../../assets/images/home/teaching.png";

const SignUp = ({person, setPerson}) => {

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
                cart: [],
            }).then(({data}) => {
            setPerson({
                id: null,
                email: e.target[0].value,
                password: e.target[1].value,
                name: null,
                surname: null,
                number: null,
                cart: []
            });
            localStorage.setItem('email', e.target[0].value)
        }).catch(() => 'error')
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
                                    variant="outlined"> Sign In</Button>
                        </div>
                        <div className="account__row">
                            <div className="account__left">
                                <h2 className="account__title">Change your life with Education.</h2>
                                <img src={teaching} alt="teaching"/>
                            </div>
                            <div className="account__form">
                                <div className="account__form_content">
                                    <h3 className="account__form_title">Welcome</h3>
                                    <p className="account__form_subtitle">lets get started with a few simple steps!</p>
                                    <form onSubmit={createAccount}>
                                        <p className="account__form_descr">E-mail*</p>
                                        <label>
                                            <input className="account__form_input" type="email" placeholder="Email"/>
                                        </label>
                                        <p className="account__form_descr">Password*</p>
                                        <label>
                                            <input className="account__form_input" type="password"
                                                   placeholder="Password"/>
                                        </label>
                                        <Button variant="contained" className="account__form_btn" type="submit">Sign
                                            Up!</Button>
                                    </form>
                                    <p className="account__subtitle">Have an account?<Link
                                        to='/signin'> Sign In</Link>
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