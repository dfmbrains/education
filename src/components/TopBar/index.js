import React, {useState} from 'react';
import './topBar.css';
import Cart from "../Cart";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const TopBar = ({person, setPerson}) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.itemsInCart);
    const totalCartPrice = cartItems.reduce((acc, rec) => acc += rec.price, 0);
    return (
        <>
            <div className="tools">
                <Button className="tools__back" onClick={() => navigate(-1)} variant="text">
                    <i className="ri-arrow-left-s-line"/> Back
                </Button>
                <div onClick={() => setOpen(true)} className="tools_cart">
                    <i className="ri-shopping-cart-2-line"/>
                    <p>{totalCartPrice}$</p>
                </div>
                <div className="tools_profile">
                    <i className="ri-settings-3-line"/>
                    <div className="tools_profile_dropdown">
                        <div onClick={() => navigate('/app/settings')}>
                            <i className="ri-user-line"/>
                        </div>
                        <div onClick={() => {
                            setPerson(undefined);
                            localStorage.clear()
                        }}>
                            <i className="ri-logout-box-r-line"/>
                        </div>
                    </div>
                </div>
            </div>
            <Cart person={person} setPerson={setPerson} open={open} setOpen={setOpen}/>
        </>
    );
};

export default TopBar;