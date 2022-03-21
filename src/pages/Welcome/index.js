import React, {useEffect, useState} from 'react';
import axios from "axios";
import welcome from '../../assets/images/welcome.png';
import './welcome.css';

const Welcome = ({person, setPerson, language, setLanguage}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]));
        axios('http://localhost:8080/users')
            .then(({data}) => setUsers(data))
    }, [person]);

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