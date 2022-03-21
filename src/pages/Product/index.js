import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import './product.css';
import axios from "axios";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setItemInCart, deleteItemFromCart} from '../../redux/cart/reducer';

const Product = ({person, setPreson, language, setLanguage}) => {

    //data
    const {path} = useParams();
    const [product, setProduct] = useState([]);
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setProduct(data));
        axios(`http://localhost:8080/${path}`)
            .then(({data}) => setLessons(data))
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
            color: '#080721',
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

    //cart
    let itemOfProduct;
    product.map((item) => {
        if (item.title.toLowerCase() === path) {
            return itemOfProduct = item
        }
    });

    const cartItems = useSelector(state => state.cart.itemsInCart);
    const isItemInCart = cartItems.some(item => item?.id === itemOfProduct?.id);
    const dispatch = useDispatch();
    const cartHandler = () => {
        setCongratulation(!congratulation);
        if (!isItemInCart) {
            return dispatch(setItemInCart(itemOfProduct))
        } else {
            return dispatch(deleteItemFromCart(itemOfProduct.id))
        }
    };

    //congratulation
    const [congratulation, setCongratulation] = useState(false);

    const [arrPersonItems, setArrPersonItems] = useState([]);
    // person.cart.reduce((acc, rec) => {
    //     return arrPersonItems = [...acc, rec]
    // }, []);
    useEffect(() => {
        axios.get(`http://localhost:8080/users?email=${localStorage.getItem('email')}`)
            .then(({data}) => setArrPersonItems(data[0].cart))
    }, []);


    return (
        <section className="product">
            {
                product.map((item) => (
                    item.title.toLowerCase() === `${path}`
                        ?
                        <div key={item.title} className="product__row">
                            <div className="product__left">
                                <h2 className="product__title">{language ? '' : 'Онлайн курсы по'} {item.title} {language ? 'Courses' : ''}</h2>
                                <p className="product__subtitle">{language ? `Here are the "right" courses on professional ${item.title} and related technologies. With theory, answers to questions, practice, feedback on the code ("code review"). Each course leads the teacher is an experienced active developer.`
                                    : `Здесь находятся «правильные» курсы по профессиональному ${item.title} и смежным технологиям. С теорией, ответами на вопросы, практикой, обратной связью по коду ("code review"). Каждый курс ведёт преподаватель - опытный действующий разработчик.`}</p>
                                <div className="product__left_row">
                                    <div className="product__card">
                                        <i className="ri-thumb-up-line"/>
                                        <h4>{language ? 'Quality' : 'Качество'}</h4>
                                        <p>{language ? 'We study development at a professional level.' : 'Мы изучаем разработку на профессиональном уровне.'}</p>
                                    </div>
                                    <div className="product__card">
                                        <i className="ri-earth-line"/>
                                        <h4>{language ? 'Remoteness' : 'Дистанционность'}</h4>
                                        <p>{language ? 'In practice, it turns out to be more convenient than full-time courses.' : 'На практике это оказывается удобнее, чем очные курсы.'}</p>
                                    </div>
                                    <div className="product__card">
                                        <i className="ri-hand-heart-line"/>
                                        <h4>{language ? 'Support' : 'Поддержка'}</h4>
                                        <p>{language ? 'You will get development tips just for you.' : 'Вы получите советы по развитию именно для вас.'}</p>
                                    </div>
                                    <div className="product__card">
                                        <i className="ri-emotion-laugh-line"/>
                                        <h4>{language ? 'Result' : 'Результат'}</h4>
                                        <p>{language ? 'The purpose of the courses is to get concrete results in terms of knowledge and skills.' : 'Цель курсов - получить конкретные результаты в плане знаний и умений.'}</p>
                                    </div>
                                    <div className="product__card">
                                        <i className="ri-shield-user-line"/>
                                        <h4>{language ? 'Guarantee' : 'Гарантия'}</h4>
                                        <p>{language ? 'Refund if you dont like something.' : 'Возврат денег, если что-то вам не понравится.'}</p>
                                    </div>
                                    <div className="product__card">
                                        <i className="ri-boxing-line"/>
                                        <h4>{language ? 'Knowledge Practice' : 'Практика знаний'}</h4>
                                        <p>{language ? 'The practice of knowledge on training projects in the learning process.' : 'Практика знаний на тренировочных проектах в процессе обучения.'}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="product__right">
                                <img className="product__right_animate" src={item.imgUrl} alt="html"/>
                                <div className="product__right_row">
                                    <p className="product__right_sale">
                                        {language ? `${Math.ceil(item.price * 1.15)}$` : `${Math.ceil(item.price * 115 * 1.15)} р.`}
                                    </p>
                                    <p className="product__right_price">{language ? `${item.price}$` : `${item.price * 115} р.`}</p>
                                </div>
                                {
                                    arrPersonItems?.length > 0 ?
                                        (arrPersonItems.some(el => item.title.toLowerCase() === el.title.toLowerCase())
                                            ? ''
                                            : (
                                                !isItemInCart ?
                                                    <Button className="product__right_btn" variant="contained"
                                                            onClick={() => cartHandler()}>{language ? 'Add to cart' : 'Добавить в корзину'}</Button>
                                                    : <Button className="product__right_btn product__right_delete"
                                                              variant="text"
                                                              onClick={() => cartHandler()}>{language ? 'Delete From Cart' : 'Удалить из корзины'}</Button>
                                            ))
                                        : (
                                            !isItemInCart ?
                                                <Button className="product__right_btn" variant="contained"
                                                        onClick={() => cartHandler()}>{language ? 'Add to cart' : 'Добавить в корзину'}</Button>
                                                : <Button className="product__right_btn product__right_delete"
                                                          variant="text"
                                                          onClick={() => cartHandler()}>{language ? 'Delete From Cart' : 'Удалить из корзины'}</Button>
                                        )
                                }
                            </div>
                        </div>
                        : ''
                ))
            }
            <div className="list">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 700}} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Lesson</StyledTableCell>
                                <StyledTableCell> </StyledTableCell>
                                <StyledTableCell align="left">{language ? 'Description' : 'Описание'}</StyledTableCell>
                                <StyledTableCell align="center">{language ? 'Number' : 'Номер'}</StyledTableCell>
                                <StyledTableCell
                                    align="right">{language ? 'Duration' : 'Длительность'}</StyledTableCell>
                                <StyledTableCell align="right">{language ? 'Date' : 'Дата'}</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lessons.map((row) => (
                                <StyledTableRow key={row.id}>
                                    <StyledTableCell component="th" scope="row">{row.title}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row"><img src={row.imgUrl}
                                                                                     alt=""/></StyledTableCell>
                                    <StyledTableCell align="left">{row.description}</StyledTableCell>
                                    <StyledTableCell align="center">{row.id}</StyledTableCell>
                                    <StyledTableCell align="right">{row.duration}</StyledTableCell>
                                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className={`${congratulation ? 'congratulations' : 'congratulations__disabled'}`}>
                <div onClick={() => setCongratulation(!congratulation)} className="layout">
                </div>
                <div className="congratulations__box">
                    {
                        !isItemInCart
                            ? <>
                                <div className="congratulations__top">
                                    <h3>{language ? 'Oooops' : 'Оййййй'} <i className="ri-emotion-normal-line"/></h3>
                                    <Button onClick={() => setCongratulation(!congratulation)} variant="text">
                                        <i className="ri-close-line"/>
                                    </Button>
                                </div>
                                <p>{language ? 'This product has been deleted from cart.' : 'Удалено из корзины.'}</p>
                            </>
                            : <>
                                <div className="congratulations__top">
                                    <h3>{language ? 'Congratulations' : 'Поздравляем'}! <i className="ri-emotion-line"/>
                                    </h3>
                                    <Button onClick={() => setCongratulation(!congratulation)} variant="text">
                                        <i className="ri-close-line"/>
                                    </Button>
                                </div>
                                <p>{language ? 'You added this course on cart' : 'Вы добавили курс в корзину'}!</p>
                            </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Product;