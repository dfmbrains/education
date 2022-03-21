import React, {useEffect, useState} from 'react';
import axios from "axios";
import './courseStore.css';
import {Button} from "@mui/material";
import '../../shared/Platform/platform.css';
import {Link, useNavigate} from "react-router-dom";

const CourseStore = ({person, setPreson}) => {

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
            <section className="coursesApp">
                <h2 className="coursesApp__title">Education coursesApp</h2>
                <div className="coursesApp__row">
                    {
                        course.filter((el) => el.title.toLowerCase().includes(search)).map((item) => (
                            <div key={item.id} className="coursesApp__card">
                                <div className="coursesApp__card_top">
                                    <Link to={item.title.toLowerCase()}>
                                        <img src={item.imgUrl} alt={item.title}/>
                                    </Link>
                                    <div>
                                        <h3 className="coursesApp__card_title">{item.title}</h3>
                                        <p className="coursesApp__card_mentor">{item.mentor}</p>
                                    </div>
                                </div>
                                <div className="coursesApp__card_bot">
                                    <p className="coursesApp__card_subtitle">{item.description}</p>
                                    <Button className="coursesApp__card_bot-btn" onClick={() => navigate(`${item.title.toLowerCase()}`)} variant="contained">Buy
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