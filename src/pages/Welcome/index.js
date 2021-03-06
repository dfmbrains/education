import React, {useEffect, useState} from 'react';
import axios from "axios";
import welcome from '../../assets/images/welcome.png';
import './welcome.css';
import {JSON_API} from "../../api";

const Welcome = ({person, setPerson, language, setLanguage}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${JSON_API}/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]));
        axios(`${JSON_API}/users`)
            .then(({data}) => setUsers(data))
    }, []);

    return (
        <div className="welcome">
            <div className="welcome__text">
                <h1>{users.length}</h1>
                <p className="welcome__title">{language ? 'Persons has already bought courses, buy it and you!' : 'Человека уже купили курсы, купи и ты!'}</p>
            </div>
            <div className="welcome__img">
                <img src={welcome} alt="welcome"/>
            </div>
        </div>
    );
};

export default Welcome;