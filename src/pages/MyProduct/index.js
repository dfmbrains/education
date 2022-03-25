import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import {styled} from "@mui/material/styles";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import './myProduct.css';
import {Button} from "@mui/material";
import {Fancybox} from "@fancyapps/ui";

const MyProduct = ({language, setLanguage, person, setPerson}) => {

    const navigate = useNavigate();

    //lessons
    const [number, setNumber] = useState(1);

    //data
    const {path} = useParams();
    const [myLessons, setMyLessons] = useState([]);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setProduct(data));
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setMyLessons(data))
    }, []);

    //table
    const StyledTableCell = styled(TableCell)(({theme}) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: '#080721',
            fontWeight: "bold",
            color: theme.palette.common.white,
            fontSize: 14,
            fontFamily: 'DM Sans, sans-serif'
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            fontFamily: 'DM Sans, sans-serif',
            color: "#FAFAFB",
            backgroundColor: '#080721',
        },
    }));

    const StyledTableRow = styled(TableRow)(({theme}) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    //this product
    let thisProudct = null;
    product.map((item) => {
        if (item.title.toLowerCase() === `${path}`) {
            return thisProudct = item;
        }
    });


    //favorites
    const [favourites, setFavourites] = useState([]);
    const favHandler = async () => {
        favourites.push(thisProudct);
        axios.patch(`http://localhost:8080/users/${person.id}`,
            {
                favourites: [...person.favourites, ...favourites]
            }).then(({data}) => favourites.length = 0)
            .catch(() => alert('error'));
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    };
    const favDeleteHandler = () => {
        axios.patch(`http://localhost:8080/users/${person.id}`,
            {
                favourites: person.favourites.filter(item => item.title.toLowerCase() !== thisProudct.title.toLowerCase())
            }).then(({data}) => alert('deleted'))
            .catch(() => alert('error'));
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setPerson(data[0]))
    };

    return (
        <section className="product myLessons">
            <Button className="myLessons__back" onClick={() => navigate(-1)} variant="text">
                <i className="ri-arrow-left-s-line"/> {language ? 'Back' : 'Назад'}
            </Button>
            <div className="myLessons__menu">
                <div className="aside__title">
                    <Link to="/">Education.</Link>
                </div>
                <div className="myLessons__list">
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableBody>
                                {myLessons.map((row) => (
                                    <StyledTableRow onClick={() => {
                                        setNumber(Number(`${row.id}`))
                                    }} key={row.id}>
                                        <StyledTableCell
                                            className={`${number === row.id ? 'myLessons__list_item' : ''}`}
                                            align="center">{row.id}.</StyledTableCell>
                                        <StyledTableCell
                                            className={`${number === row.id ? 'myLessons__list_item' : ''}`}
                                            component="th" scope="row">{row.title}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div className="myLessons__content">
                {
                    product.map((item) => (
                        item.title.toLowerCase() === `${path}`
                            ?
                            <div key={item.title} className="product__row">
                                <div className="product__left">
                                    <div className="myLessons__content_row">
                                        <h2 className="product__title">{language ? `${item.title} courses` : `Онлайн курсы по ${item.title}`}</h2>
                                        {
                                            person.favourites.length > 0
                                                ? (
                                                    person.favourites.some(el => el.title.toLowerCase() === item.title.toLowerCase())
                                                        ? <i onClick={favDeleteHandler} className="ri-heart-fill"/>
                                                        : <i onClick={favHandler} className="ri-heart-add-line"/>
                                                ) : <i onClick={favHandler} className="ri-heart-add-line"/>
                                        }
                                    </div>
                                    <p className="product__subtitle">{language ? `Here are the "right" courses on
                                        professional ${item.title} and related technologies. With theory, answers to
                                        questions, practice, feedback on the code ("code review"). Each course leads
                                        the teacher is an experienced active developer.` : `Здесь находятся «правильные» курсы по
                                        профессиональному ${item.title} и смежным технологиям. С теорией, ответами на
                                        вопросы, практикой, обратной связью по коду ("code review"). Каждый курс ведёт
                                        преподаватель - опытный действующий разработчик.`}</p>
                                    {
                                        myLessons.map((el) => (
                                            el.id === number ? <div key={el.id}>
                                                    <h4 className="myLessons__content_title">{language ? 'Lessons' : 'Урок'} №{el.id}</h4>
                                                    <h3 className="myLessons__content_name">{el.title}</h3>
                                                    <div
                                                        className="myLessons__content_video"
                                                    >
                                                        <i
                                                            data-fancybox="gallery"
                                                            data-src={el.video}
                                                            className="ri-play-fill"/>
                                                    </div>
                                                </div>
                                                : ''
                                        ))
                                    }
                                </div>
                                <div className="product__right">
                                    <img src={item.imgUrl} alt="html"/>
                                </div>
                            </div>
                            : ''
                    ))
                }
            </div>
        </section>
    );
};

export default MyProduct;