import React, {useEffect, useState} from 'react';
import './cart.css';
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {deleteItemFromCart} from "../../redux/cart/reducer";

const Cart = ({open, setOpen, person, setPerson}) => {
    const [course, setCourse] = useState({});
    useEffect(() => {
        axios('http://localhost:8080/courses')
            .then(({data}) => setCourse(data))
    }, []);

    let cartItems = useSelector(state => state.cart.itemsInCart);
    const totalCartPrice = cartItems.reduce((acc, rec) => acc += rec.price, 0);

    //delete
    const dispatch = useDispatch();
    const cartDeleteHandler = () => {
        course.map((item) => {
            return dispatch(deleteItemFromCart(item.id))
        });
    };

    //buy courses
    const buyCourses = () => {
        axios.patch(`http://localhost:8080/users/${person.id}`,
            {
                cart: [...person.cart, ...cartItems]
            }).then(() => console.log('success'))
            .catch(() => console.log('try again'));
        cartDeleteHandler()
    };

    return (
        <>
            <div className={`${open ? 'cart' : 'close_cart'}`}>
                <div>
                    <div className="cart__back">
                        <Button onClick={() => setOpen(false)} variant="text" className="cart__back">
                            <i className="ri-arrow-left-s-line"/> Back
                        </Button>
                    </div>
                    <div className="cart__row">
                        <h3 className="cart__title">Cart</h3>
                        <Button onClick={() => cartDeleteHandler()} variant="text"
                                className="cart__delete">
                            <i className="ri-delete-bin-line"/>
                        </Button>
                    </div>
                    {
                        cartItems.length > 0
                            ? <div className="cart__list">
                                {
                                    cartItems.map((item) => (
                                        <div key={item.title} className="cart__item">
                                            <img src={item.imgUrl} alt="html"/>
                                            <div>
                                                <h4 className="cart__item_title">{item.title} Courses</h4>
                                                <p className="cart__item_price">{item.price}$</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : <p className="cart__empty">... <br/> <i className="ri-emotion-sad-line"/></p>
                    }
                </div>
                <div>
                    <p className="cart__total">
                        <i className="ri-money-dollar-box-line"/>
                        {totalCartPrice}$
                    </p>
                    <a href="/app/courses">
                        <Button onClick={buyCourses} variant="contained" className="cart__buy">Buy Now!</Button>
                    </a>
                </div>
            </div>
            <div onClick={() => setOpen(false)} className={`${open ? 'layout' : 'close_layout'}`}>
            </div>
        </>
    );
};

export default Cart;