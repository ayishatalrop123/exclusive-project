

// import React from 'react';
// import './Popular.css';
// import data_product from '../Assets/Data';
// import Item from '../Item/Item';
// import rectangle from '../Assets/Rectangle 18.svg';
// import phones from '../Assets/Category-CellPhone.svg';
// import computer from '../Assets/Category-Computer.svg';
// import SmartWatch from '../Assets/Category-SmartWatch.svg';
// import headphones from '../Assets/Category-Headphone.svg';
// import gaming from '../Assets/Category-Gamepad.svg';
// import camera from '../Assets/camera.svg';
// import head from '../Assets/Services.svg';
// import shield from '../Assets/Services (1).svg';
// import delivery from '../Assets/Services (2).svg';
// import { useNavigate } from 'react-router-dom';

// const Popular = ({ searchKeyword = '' }) => {
//     const navigate = useNavigate();

//     const handleFeatureButtonClick = () => {
//         navigate('/category');
//     };

//     const filteredProducts = data_product.filter(item => 
//         item.name.toLowerCase().includes(searchKeyword.toLowerCase())
//     );

//     return (
//         <div className='popular'>
//             <div className='wrapper'>
//                 <div className='top-cat'>
//                     <div className='rectangle'>
//                         <img src={rectangle} alt='rectangle' />
//                         <h5>Categories</h5>
//                     </div>
//                     <h2>Browse By Category</h2>
//                     <nav className='items'>
//                         <ul>
//                             <li>
//                                 <div className='img'>
//                                     <img src={phones} alt='' />
//                                 </div>
//                                 <h6>Phones</h6>
//                             </li>
//                             <li>
//                                 <div className='img'>
//                                     <img src={computer} alt='computer' />
//                                 </div>
//                                 <h6>Computer</h6>
//                             </li>
//                             <li>
//                                 <div className='img'>
//                                     <img src={SmartWatch} alt='SmartWatch' />
//                                 </div>
//                                 <h6>SmartWatch</h6>
//                             </li>
//                             <li>
//                                 <div className='img'>
//                                     <img src={headphones} alt='head' />
//                                 </div>
//                                 <h6>Head-phone</h6>
//                             </li>
//                             <li>
//                                 <div className='img'>
//                                     <img src={gaming} alt='gaming' />
//                                 </div>
//                                 <h6>Gaming</h6>
//                             </li>
//                             <li>
//                                 <div className='img'>
//                                     <img src={camera} alt='cam' />
//                                 </div>
//                                 <h6>Camera</h6>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className='popular-item'>
//                         {filteredProducts.map((item, i) => {
//                             return (
//                                 <Item
//                                     key={i}
//                                     id={item.id}
//                                     name={item.name}
//                                     image={item.image}
//                                     wish={item.wishlist}
//                                     eye={item.eye}
//                                     button={item.button}
//                                     price={item.price}
//                                     star={item.star}
//                                     num={item.num}
//                                 />
//                             );
//                         })}
//                     </div>
//                     <div className='feature'>
//                         <button onClick={handleFeatureButtonClick}>View All Products</button>
//                         <ul>
//                             <li>
//                                 <div className='round_img'>
//                                     <img src={delivery} alt='delivery' />
//                                 </div>
//                                 <h4>Free And Fast Delivery</h4>
//                                 <h6>Free delivery for all orders over $140</h6>
//                             </li>
//                             <li>
//                                 <div className='round_img'>
//                                     <img src={head} alt='head' />
//                                 </div>
//                                 <h4>Free And Fast Delivery</h4>
//                                 <h6>Free delivery for all orders over $140</h6>
//                             </li>
//                             <li>
//                                 <div className='round_img'>
//                                     <img src={shield} alt='shield' />
//                                 </div>
//                                 <h4>Free And Fast Delivery</h4>
//                                 <h6>Free delivery for all orders over $140</h6>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Popular;







import React from 'react';
import './Popular.css';
import data_product from '../Assets/Data';
import Item from '../Item/Item';
import rectangle from '../Assets/Rectangle 18.svg';
import phones from '../Assets/Category-CellPhone.svg';
import computer from '../Assets/Category-Computer.svg';
import SmartWatch from '../Assets/Category-SmartWatch.svg';
import headphones from '../Assets/Category-Headphone.svg';
import gaming from '../Assets/Category-Gamepad.svg';
import camera from '../Assets/camera.svg';
import head from '../Assets/Services.svg';
import shield from '../Assets/Services (1).svg';
import delivery from '../Assets/Services (2).svg';
import { useNavigate } from 'react-router-dom';

const Popular = ({ searchKeyword = '' }) => {
    const navigate = useNavigate();

    const handleFeatureButtonClick = () => {
        navigate('/category');
    };

    const filteredProducts = data_product.filter(item =>
        item.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className='popular'>
            <div className='wrapper'>
                <div className='top-cat'>
                    <div className='rectangle'>
                        <img src={rectangle} alt='rectangle' />
                        <h5>Categories</h5>
                    </div>
                    <h2>Browse By Category</h2>
                    <nav className='items'>
                        <ul>
                            <li>
                                <div className='img'>
                                    <img src={phones} alt='' />
                                </div>
                                <h6>Phones</h6>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={computer} alt='computer' />
                                </div>
                                <h6>Computer</h6>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={SmartWatch} alt='SmartWatch' />
                                </div>
                                <h6>SmartWatch</h6>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={headphones} alt='head' />
                                </div>
                                <h6>Head-phone</h6>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={gaming} alt='gaming' />
                                </div>
                                <h6>Gaming</h6>
                            </li>
                            <li>
                                <div className='img'>
                                    <img src={camera} alt='cam' />
                                </div>
                                <h6>Camera</h6>
                            </li>
                        </ul>
                    </nav>
                    <div className='popular-item'>
                        {filteredProducts.map((item) => (
                            <Item
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                wish={item.wishlist}
                                eye={item.eye}
                                button={item.button}
                                price={item.price}
                                star={item.star}
                                num={item.num}
                            />
                        ))}
                    </div>
                    <div className='feature'>
                        <button onClick={handleFeatureButtonClick}>View All Products</button>
                        <ul>
                            <li>
                                <div className='round_img'>
                                    <img src={delivery} alt='delivery' />
                                </div>
                                <h4>Free And Fast Delivery</h4>
                                <h6>Free delivery for all orders over $140</h6>
                            </li>
                            <li>
                                <div className='round_img'>
                                    <img src={head} alt='head' />
                                </div>
                                <h4>Free And Fast Delivery</h4>
                                <h6>Free delivery for all orders over $140</h6>
                            </li>
                            <li>
                                <div className='round_img'>
                                    <img src={shield} alt='shield' />
                                </div>
                                <h4>Free And Fast Delivery</h4>
                                <h6>Free delivery for all orders over $140</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;
