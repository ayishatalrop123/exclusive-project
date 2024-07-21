
// import React from 'react';
// import all_product from '../Assets/all_product';
// import { useCart } from '../../contexts/CartContext';
// import { useWishlist } from '../../contexts/WishlistContext';
// import "./ProductList.css"
// import Item from "../Item/Item"

// const ProductList = () => {
//     const { addToCart } = useCart();
//     const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

//     const handleAddToCart = (product, e) => {
//         e.stopPropagation();
//         addToCart(product);
//     };

//     const handleWishlistClick = (product, e) => {
//         e.stopPropagation();
//         const isInWishlist = wishlist.some(item => item.id === product.id);
//         if (isInWishlist) {
//             removeFromWishlist(product.id);
//         } else {
//             addToWishlist(product);
//         }
//     };

//     return (
//         <div className='wrapper'>
//             <div className='products-main' style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', padding: '2rem 2rem 2rem 10rem' }}>
//                 {all_product.map(product => (
                        
//                              <Item
//                                     key={product.id}
//                                     id={product.id}
//                                     name={product.name}
//                                     image={product.image}
//                                     price={product.price}
//                                     button={product.button}
//                                     wish={product.wishlist}
//                                     eye={product.eye}
//                                     star={product.star}
//                                     num={product.num}
//                                 />
                        
                
//                     ))}
           
//  </div>
//         </div>
//     );
// };

// export default ProductList;




import React from 'react';
import all_product from '../Assets/all_product'; // Ensure this is the correct path
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import "./ProductList.css";
import Item from "../Item/Item";

const ProductList = ({ searchKeyword }) => {
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const filteredProducts = all_product.filter(product =>
        product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleAddToCart = (product, e) => {
        e.stopPropagation();
        addToCart(product);
    };

    const handleWishlistClick = (product, e) => {
        e.stopPropagation();
        const isInWishlist = wishlist.some(item => item.id === product.id);
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className='wrapper'>
            <div className='products-main' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {filteredProducts.map(product => (
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
    );
};

export default ProductList;
