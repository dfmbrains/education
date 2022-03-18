import React, {useEffect, useState} from 'react';
import axios from "axios";
import './courseStore.css';
import {Button} from "@mui/material";
import '../../shared/Platform/platform.css';
import {Link, useNavigate} from "react-router-dom";

const CourseStore = () => {

    //navigate
    const navigate = useNavigate();

    //data
    const [course, setCourse] = useState([]);
    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setCourse(data))
    }, []);

    //search
    const [search, setSearch] = useState('');
    const searchHandler = (e) => {
        e.preventDefault();
        setSearch(e.target[0].value.toLowerCase())
    };

    return (
        <>
            <section className="topBar">
                <form onSubmit={searchHandler}>
                    <label>
                        <input placeholder="Search courses" type="text"/>
                    </label>
                    <Button variant="text" type="submit">
                        <i className="ri-search-line"/>
                    </Button>
                </form>
            </section>
            <section className="courseStore">
                <h2 className="courseStore__title">Education courses</h2>
                <div className="courseStore__row">
                    {
                        course.filter((el) => el.title.toLowerCase().includes(search)).map((item) => (
                            <div key={item.id} className="courseStore__card">
                                <div className="courseStore__card_top">
                                    <Link to={item.title.toLowerCase()}>
                                        <img src={item.imgUrl} alt={item.title}/>
                                    </Link>
                                    <div>
                                        <h3 className="courseStore__card_title">{item.title}</h3>
                                        <p className="courseStore__card_mentor">{item.mentor}</p>
                                    </div>
                                </div>
                                <div className="courseStore__card_bot">
                                    <p className="courseStore__card_subtitle">{item.description}</p>
                                    <Button onClick={() => navigate(`${item.title.toLowerCase()}`)} variant="contained">Buy
                                        Now!</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    );
};

export default CourseStore;