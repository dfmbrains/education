import React from 'react';
import error from '../../assets/images/error.png';
import {Button} from "@mui/material";
import './error.css';
import {useNavigate} from "react-router-dom";

const Error = ({language}) => {
    const navigate = useNavigate();
    return (
        <section className="error">
            <div className="error__content">
                <img src={error} alt="error"/>
                <h2>{language ? 'Oops! Something went wrong' : 'Оййй! Что-то пошло не так'}</h2>
                <p>{language ? 'Check url and try again!' : 'Проверьте адрес и поробуйте заново'}</p>
                <Button onClick={() => navigate('/')}
                        variant="contained">{language ? 'Return to home page' : 'Вернуться на главную страницу'}</Button>
            </div>
        </section>
    );
};

export default Error;