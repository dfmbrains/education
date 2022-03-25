import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import './settings.css';
import change from '../../assets/images/change.png';
import {JSON_API} from "../../api";

const Settings = ({person, setPerson, language, setLanguage}) => {

    //data
    useEffect(() => {
        axios.get(`${JSON_API}/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);

    const infoHandler = (e) => {
        axios.patch(`${JSON_API}/users/${person.id}`,
            {
                email: e.target[0].value.length === 0 ? person.email : e.target[0].value,
                name: e.target[1].value.length === 0 ? person.name : e.target[1].value,
                surname: e.target[2].value.length === 0 ? person.surname : e.target[2].value,
                password: e.target[3].value.length === 0 ? person.password : e.target[3].value,
                number: e.target[4].value.length === 0 ? person.number : e.target[4].value,
                img: e.target[5].value.length === 0 ? person.img : e.target[5].value
            })
            .then(({data}) => console.log(data))
            .catch(() => alert('error'))
    };


    return (
        <div className="settings">
            <div className="settings__left">
                <div className="settings__form">
                    <h2 className="settings__title">{language ? 'Profile details' : 'Настройка профиля'}</h2>
                    <form onSubmit={infoHandler}>
                        <label>
                            <p>{language ? 'Write your E-mail' : 'Напишите свою почту'}</p>
                            <input autoComplete="on" placeholder={person.email} type="email"/>
                        </label>
                        <label>
                            <p>{language ? 'Write your Name' : 'Напишите своё имя'}</p>
                            <input autoComplete="on" placeholder={person.name} type="name"/>
                        </label>
                        <label>
                            <p>{language ? 'Write your Surname' : 'Напишите свою фамилию'}</p>
                            <input autoComplete="on" placeholder={person.surname} type="surname"/>
                        </label>
                        <label>
                            <p>{language ? 'New Password' : 'Новый пароль'}</p>
                            <input autoComplete="on" placeholder={language ? 'Password' : 'Пароль'} type="password"/>
                        </label>
                        <label>
                            <p>{language ? 'Write your Phone Number' : 'Напишите свой номер телефона'}</p>
                            <input autoComplete="on" placeholder={person.number} type="number"/>
                        </label>
                        <label>
                            <p>{language ? 'Insert a Link to put a Photo on Profile' : 'Вставьте ссылку к фото'}</p>
                            <input autoComplete="on" placeholder={language ? 'Image' : 'Фото'} type="text"/>
                        </label>
                        <Button variant="contained"
                                type="submit">{language ? 'Save changes' : 'Сохранить изменения'}</Button>
                    </form>
                </div>
            </div>
            <div className="settings__img">
                {
                    person.img === null
                        ? <img className="settings__img_none" src={change} alt="change"/>
                        : <img className="settings__img_yes" src={person.img} alt={person.name}/>
                }
            </div>
        </div>
    );
};

export default Settings;