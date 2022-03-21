import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";

const Settings = ({person, setPerson}) => {

    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    }, []);

    const infoHandler = (e) => {
        axios.patch(`http://localhost:8080/users/${person.id}`,
            {
                email: e.target[0].value,
                name: e.target[1].value,
                surname: e.target[2].value,
                password: e.target[3].value,
                number: e.target[4].value
            })
            .then(({data}) => console.log(data))
    };


    return (
        <div>
            <form onSubmit={infoHandler}>
                <label>
                    <input autoComplete="on" placeholder="Email" type="email"/>
                </label>
                <label>
                    <input autoComplete="on" placeholder="Name" type="name"/>
                </label>
                <label>
                    <input autoComplete="on" placeholder="Surname" type="surname"/>
                </label>
                <label>
                    <input autoComplete="on" placeholder="Password" type="password"/>
                </label>
                <label>
                    <input autoComplete="on" placeholder="Phone Number" type="tel"/>
                </label>
                <Button variant="contained" type="submit">Refresh Information</Button>
            </form>
        </div>
    );
};

export default Settings;