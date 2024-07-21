// // // // // src/contexts/CartContext.js

// // // // import React, { createContext, useState } from 'react';

// // // // export const CartContext = createContext();

// // // // export const CartProvider = ({ children }) => {
// // // //     const [cart, setCart] = useState([]);

// // // //     const addToCart = (item) => {
// // // //         setCart([...cart, item]);
// // // //     };

// // // //     const cartCount = cart.length;

// // // //     return (
// // // //         <CartContext.Provider value={{ cart, addToCart, cartCount }}>
// // // //             {children}
// // // //         </CartContext.Provider>
// // // //     );
// // // // };



// // // import React, { createContext, useState } from 'react';

// // // export const CartContext = createContext();

// // // export const CartProvider = ({ children }) => {
// // //     const [cart, setCart] = useState([]);

// // //     const addToCart = (item) => {
// // //         setCart([...cart, item]);
// // //     };

// // //     const cartCount = cart.length;

// // //     return (
// // //         <CartContext.Provider value={{ cart, addToCart, cartCount }}>
// // //             {children}
// // //         </CartContext.Provider>
// // //     );
// // // };


// // // CartContext.js
// // import React, { createContext, useContext, useState } from 'react';

// // const CartContext = createContext();

// // export const CartProvider = ({ children }) => {
// //   const [cartCount, setCartCount] = useState(0);
  
// //   const addToCart = () => {
// //     setCartCount((prevCount) => prevCount + 1);
// //   };

// //   return (
// //     <CartContext.Provider value={{ cartCount, addToCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// // // export const useCart = () => {
// // //   return useContext(CartContext);
// // // };



// // export const useCart = () => useContext(CartContext);




// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
    
//     const addToCart = (item) => {
//         setCartItems((prevItems) => [...prevItems, item]);
//     };

//     const cartCount = cartItems.length; // Or however you calculate the count

//     return (
//         <CartContext.Provider value={{ addToCart, cartCount }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     return useContext(CartContext);
// };


import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prev) => [...prev, item]);
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
