
import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import re from '../Components/Assets/Icon-return.svg';
import truck from '../Components/Assets/icon-delivery.svg';
import related_item from '../Components/Assets/related_item';
import angle from '../Components/Assets/Rectangle 18.svg';
import Item from '../Components/Item/Item';
import Navbar from '../Components/Navbar/Navbar';
import "./css/Product.css";

const Product = () => {
    const { id } = useParams();
    const product = all_product.find(prod => prod.id === parseInt(id));

    if (!product) return <div>Product not found</div>;

    return (
        <div className='product'>
            <Navbar/>
            <div className='wrapper'>
                <div className='container'>
                    <div className='single'>
                        <div className='left'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='right'>
                            <h2>{product.name}</h2>
                            <div className='rate'>
                                <img src={product.star} alt="star icon" />
                                <span>{product.num}</span>
                                <small>InStock</small>
                            </div>
                            <h5>${product.price}</h5>
                            <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy
                                bubble free install & mess free removal Pressure sensitive.</p>
                                <hr/>
                                <div className='box'>
                                <span>
                                        <img src={truck} alt="truck"/>
                                </span>
                                    <div className='content'>
                                        <h4>Free Delivery</h4>
                                        <h6>Enter your postal code for Delivery Availability</h6>
                                    </div>
                                </div>
                                <div className='box'>
                                    <span>
                                        <img src={re} alt="return"/>
                                    </span>
                                    <div className='content'>
                                        <h4>Return Delivery</h4>
                                        <h6>Free 30 Days Delivery Returns. Details</h6>
                                    </div>
                                </div>
                        </div>
                        
                    </div>
                    <div className='related'>
                        <div className='rect'>
                            <img src={angle} alt='rect'/>
                            <h5>Related</h5>
                        </div>
                        {related_item.map(product => (
                                
                                <Item
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    image={product.image}
                                    price={product.price}
                                    button={product.button}
                                    wish={product.wishlist}
                                    eye={product.eye}
                                    star={product.star}
                                    num={product.num}
                                />            
                    ))}
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Product;

