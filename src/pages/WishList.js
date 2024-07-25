
import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import Item from '../Components/Item/Item';
import Navbar from '../Components/Navbar/Navbar';
import './css/WishList.css';

const WishList = () => {
    const { wishlist } = useWishlist();

    return (
        <>
        <Navbar/>
        <div className='wishlist-page'>
            <h2>Your Wishlist</h2>
            <div className='wishlist-items'>
                {wishlist.map((item, index) => (
                    <div key={index}>
                        <img src={item.image} alt={item.name} />
                        <div>
                            <h4>{item.name}</h4>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default WishList;
