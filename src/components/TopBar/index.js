import React, {useState} from 'react';
import './topBar.css';
import Cart from "../Cart";
import {useSelector} from "react-redux";

const TopBar = () => {
    const [open, setOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.itemsInCart);
    const totalCartPrice = cartItems.reduce((acc, rec) => acc += rec.price, 0);
    return (
        <>
            <div className="tools">
                <div onClick={() => setOpen(true)} className="tools_cart">
                    <i className="ri-shopping-cart-2-line"/>
                    <p>{totalCartPrice}$</p>
                </div>
                <div className="tools_profile">
                    <i className="ri-user-line"/>
                </div>
            </div>
            <Cart open={open} setOpen={setOpen}/>
        </>
    );
};

export default TopBar;