import React, {useEffect, useState} from 'react';
import './mycourses.css';
import {Button} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";
import none from '../../assets/images/none.png';

const MyCourses = ({person, setPerson, language, setLanguage}) => {

    //navigate
    const navigate = useNavigate();

    let cartItems = useSelector(state => state.cart.itemsInCart);
    //search
    const [search, setSearch] = useState('');
    const searchHandler = (e) => {
        e.preventDefault();
        setSearch(e.target[0].value.toLowerCase())
    };

    //data
    const [myCourses, setMyCourses] = useState([]);
    useEffect(() => {
        axios(`http://localhost:8080/users/${person.id}`)
            .then(({data}) => setMyCourses(data.cart))
    }, [person, person.cart, cartItems, localStorage, myCourses]);

    //delete
    const myCoursesDelete = (item) => {
        if (myCourses.length > 1) {
            axios.patch(`http://localhost:8080/users/${person.id}`,
                {
                    cart: myCourses.filter((el) => el.id !== item.id)
                })
        } else {
            axios.patch(`http://localhost:8080/users/${person.id}`,
                {
                    cart: []
                })
        }
    };

    return (
        <>
            <section className="topBar">
                <form onSubmit={searchHandler}>
                    <label>
                        <input placeholder={language ? 'Search courses' : 'Поиск курсов'} type="text"/>
                    </label>
                    <Button variant="text" type="submit">
                        <i className="ri-search-line"/>
                    </Button>
                </form>
            </section>
            <section className="coursesApp">
                <h2 className="coursesApp__title">{language ? 'Your courses' : 'Ваши курсы'}</h2>
                <div className="coursesApp__row">
                    {
                        myCourses?.length > 0
                            ? (myCourses.filter((el) => el.title.toLowerCase().includes(search)).map((item) => (
                                <div key={item.title} className="coursesApp__card">
                                    <div className="coursesApp__card_top">
                                        <Link to='/'>
                                            <img src={item.imgUrl} alt={item.title}/>
                                        </Link>
                                        <div>
                                            <h3 className="coursesApp__card_title">{item.title}</h3>
                                            <p className="coursesApp__card_mentor">{item.mentor}</p>
                                        </div>
                                    </div>
                                    <div className="coursesApp__card_bot">
                                        <p className="coursesApp__card_subtitle">{item.description}</p>
                                        <div className="coursesApp__card_bot-row">
                                            <Button onClick={() => navigate(`${item.title.toLowerCase()}`)}
                                                    variant="contained">{language ? 'Watch' : 'Смотреть курс'}</Button>
                                            <Button onClick={() => myCoursesDelete(item)} variant="contained">
                                                <i className="ri-delete-bin-line"/>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )))
                            : <div className="coursesApp__none">
                                <img src={none} alt="none"/>
                                <h3>{language ? 'There aren’t any courses' : 'У вас еще нет купленных курсов'}</h3>
                                <Link to="/app/store">
                                    <i className="ri-add-circle-fill"/>
                                    {language ? 'Add new courses' : 'Купить курсы'} <span> </span></Link>
                            </div>
                    }
                </div>
            </section>
        </>
    );
};

export default MyCourses;