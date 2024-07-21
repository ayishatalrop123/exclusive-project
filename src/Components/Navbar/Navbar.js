
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { useCart } from '../../contexts/CartContext';
// // import { useWishlist } from '../../contexts/WishlistContext';
// // import './Navbar.css';

// // import exclusive from '../Assets/Logo.png';
// // import search from '../Assets/Component 2.svg';
// // import wish from '../Assets/Vector.svg';
// // import cart from '../Assets/Cart1 with buy.svg';

// // const Navbar = () => {
// //     const [menu, setMenu] = useState('');
// //     const { cart: cartItems } = useCart();
// //     const { wishlist } = useWishlist();
// //     const navigate = useNavigate();
// //     const cartCount = cartItems.length;
// //     const wishlistCount = wishlist.length;

// //     const handleNavigation = (path, menuName) => {
// //         setMenu(menuName);
// //         navigate(path);
// //     };

// //     return (
// //         <div className="navbar">
// //             <div className="wrapper">
// //                 <h1 className="left">
// //                     <img src={exclusive} alt="main-logo" />
// //                 </h1>
// //                 <nav className="middle">
// //                     <ul>
// //                         <li onClick={() => handleNavigation('/', 'Home')}>
// //                             <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
// //                             {menu === 'Home' && <hr />}
// //                         </li>
// //                         <li onClick={() => handleNavigation('/', 'Contact')}>
// //                             <Link to="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</Link>
// //                             {menu === 'Contact' && <hr />}
// //                         </li>
// //                         <li onClick={() => handleNavigation('/', 'About')}>
// //                             <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link>
// //                             {menu === 'About' && <hr />}
// //                         </li>
// //                         <li onClick={() => handleNavigation('/signup', 'SignUp')}>
// //                             <Link to="/signup" style={{ textDecoration: 'none', color: '#000' }}>SignUp</Link>
// //                             {menu === 'SignUp' && <hr />}
// //                         </li>
// //                     </ul>
// //                 </nav>
// //                 <nav className="right">
// //                     <div className="input-container">
// //                         <input type="text" placeholder="What are you looking for?" />
// //                         <span>
// //                             <img src={search} alt="search" />
// //                         </span>
// //                     </div>
// //                     <div className="icon">
// //                         <Link to="/wishlist">
// //                             <img src={wish} alt="wishlist" />
// //                             <div className="nav-wishlist-count">{wishlistCount}</div>
// //                         </Link>
// //                     </div>
// //                     <div className="icon-cart">
// //                         <Link to="/cart">
// //                             <img src={cart} alt="cart" />
// //                             <div className="nav-cart-count">{cartCount}</div>
// //                         </Link>
// //                     </div>
// //                 </nav>
// //             </div>
// //             <hr />
// //         </div>
// //     );
// // };

// // export default Navbar;




// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../../contexts/CartContext';
// import { useWishlist } from '../../contexts/WishlistContext';
// import './Navbar.css';

// import exclusive from '../Assets/Logo.png';
// import search from '../Assets/Component 2.svg';
// import wish from '../Assets/Vector.svg';
// import cart from '../Assets/Cart1 with buy.svg';

// const Navbar = ({ onSearchChange }) => {
//     const [menu, setMenu] = useState('');
//     const { cart: cartItems } = useCart();
//     const { wishlist } = useWishlist();
//     const navigate = useNavigate();
//     const cartCount = cartItems.length;
//     const wishlistCount = wishlist.length;

//     const handleNavigation = (path, menuName) => {
//         setMenu(menuName);
//         navigate(path);
//     };

//     const handleSearchChange = (e) => {
//         onSearchChange(e.target.value);
//     };

//     return (
//         <div className="navbar">
//             <div className="wrapper">
//                 <h1 className="left">
//                     <img src={exclusive} alt="main-logo" />
//                 </h1>
//                 <nav className="middle">
//                     <ul>
//                         <li onClick={() => handleNavigation('/', 'Home')}>
//                             <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
//                             {menu === 'Home' && <hr />}
//                         </li>
//                         <li onClick={() => handleNavigation('/', 'Contact')}>
//                             <Link to="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</Link>
//                             {menu === 'Contact' && <hr />}
//                         </li>
//                         <li onClick={() => handleNavigation('/', 'About')}>
//                             <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link>
//                             {menu === 'About' && <hr />}
//                         </li>
//                         <li onClick={() => handleNavigation('/signup', 'SignUp')}>
//                             <Link to="/signup" style={{ textDecoration: 'none', color: '#000' }}>SignUp</Link>
//                             {menu === 'SignUp' && <hr />}
//                         </li>
//                     </ul>
//                 </nav>
//                 <nav className="right">
//                     <div className="input-container">
//                         <input
//                             type="text"
//                             placeholder="What are you looking for?"
//                             onChange={handleSearchChange}
//                         />
//                         <span>
//                             <img src={search} alt="search" />
//                         </span>
//                     </div>
//                     <div className="icon">
//                         <Link to="/wishlist">
//                             <img src={wish} alt="wishlist" />
//                             <div className="nav-wishlist-count">{wishlistCount}</div>
//                         </Link>
//                     </div>
//                     <div className="icon-cart">
//                         <Link to="/cart">
//                             <img src={cart} alt="cart" />
//                             <div className="nav-cart-count">{cartCount}</div>
//                         </Link>
//                     </div>
//                 </nav>
//             </div>
//             <hr />
//         </div>
//     );
// };

// export default Navbar;









import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import './Navbar.css';


import exclusive from '../Assets/Logo.png';
import search from '../Assets/Component 2.svg';
import wish from '../Assets/Vector.svg';
import cart from '../Assets/Cart1 with buy.svg';

const Navbar = ({ onSearchChange }) => {
    const [menu, setMenu] = useState('');
    const { cart: cartItems } = useCart();
    const { wishlist } = useWishlist();
    const navigate = useNavigate();
    const cartCount = cartItems.length;
    const wishlistCount = wishlist.length;

    const handleNavigation = (path, menuName) => {
        setMenu(menuName);
        navigate(path);
    };

    const handleSearchChange = (e) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="navbar">
            <div className="wrapper">
                <h1 className="left">
                    <img src={exclusive} alt="main-logo" />
                </h1>
                <nav className="middle">
                <input type="checkbox" id="click"/>
                            <label for="click" class="menu-btn">
                                <i class="fas fa-bars"></i>
                            </label>
                    <ul className='menu'>
                        <li onClick={() => handleNavigation('/', 'Home')}>
                            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                            {menu === 'Home' && <hr />}
                        </li>
                        <li onClick={() => handleNavigation('/', 'Contact')}>
                            <Link to="/contact" style={{ textDecoration: 'none', color: '#000' }}>Contact</Link>
                            {menu === 'Contact' && <hr />}
                        </li>
                        <li onClick={() => handleNavigation('/', 'About')}>
                            <Link to="/about" style={{ textDecoration: 'none', color: '#000' }}>About</Link>
                            {menu === 'About' && <hr />}
                        </li>
                        <li onClick={() => handleNavigation('/signup', 'SignUp')}>
                            <Link to="/signup" style={{ textDecoration: 'none', color: '#000' }}>SignUp</Link>
                            {menu === 'SignUp' && <hr />}
                        </li>
                    </ul>
                </nav>
                <nav className="right">
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            onChange={handleSearchChange}
                        />
                        <span>
                            <img src={search} alt="search" />
                        </span>
                    </div>
                    <div className="icon">
                        <Link to="/wishlist">
                            <img src={wish} alt="wishlist" />
                            <div className="nav-wishlist-count">{wishlistCount}</div>
                        </Link>
                    </div>
                    <div className="icon-cart">
                        <Link to="/cart">
                            <img src={cart} alt="cart" />
                            <div className="nav-cart-count">{cartCount}</div>
                        </Link>
                    </div>
                </nav>
            </div>
            <hr />
        </div>
    );
};

export default Navbar;
