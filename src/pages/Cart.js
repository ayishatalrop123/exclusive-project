
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './css/Cart.css';
import { useCart } from '../contexts/CartContext';


const Cart = () => {
    const { cart, removeFromCart } = useCart();


    return (
        <div className='cart'>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
