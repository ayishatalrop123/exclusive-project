
import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { Link } from 'react-router-dom';
import "./Item.css"

const Item = ({ id, name, image, price, button, wish, eye, star, num }) => {
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ id, name, image, price });
    };

    const isInWishlist = wishlist.some(item => item.id === id);

    const handleWishlistClick = (e) => {
        e.stopPropagation();
        if (isInWishlist) {
            removeFromWishlist(id);
        } else {
            addToWishlist({ id, name, image, price });
        }
    };

    return (
        <div className='item'>
            <div className='bg'>
                <div className='img'>
                    {/* <img src={image} alt={name} /> */}
                    <Link to={`/product/${id}`}>
                        <img src={image} alt={name} />
                    </Link>
                </div> 
                <button className='add-to-cart' onClick={handleAddToCart}>
                    {button}
                </button>
                <button 
                    className='wishlist' 
                    onClick={handleWishlistClick} 
                    style={{ color: isInWishlist ? 'red' : 'inherit' }}
                >
                    <img src={wish} alt='wishlist' />
                </button>
                <button className='eye'>
                    <img src={eye} alt='eye' />
                </button>
            </div>
            <div className='details'>
                <h4>{name}</h4>  
                <div className='rating'>
                   <p>${price}</p>
                    <img className="star" src={star} alt='star' />
                    <span className='num'>{num}</span>
                </div>
            </div>
        </div>
    );
};

export default Item;
