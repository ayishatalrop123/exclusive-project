// import React from 'react';
// import { Link } from 'react-router-dom';
// import all_product from '../Assets/all_product';

// const ProductDetail= () => {
//     return (
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
//             {all_product.map(product => (
//                 <div key={product.id} style={{ border: '1px solid #ddd', padding: '10px', width: '200px' }}>
//                     <h3>{product.name}</h3>
//                     <img 
//                         src={product.image || 'default-image.jpg'} 
//                         alt={product.name} 
//                         style={{ width: '100%', height: 'auto' }}
//                     />
//                     <p>Price: ${product.price}</p>
//                     <Link to={`/product/${product.id}`}>View Details</Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProdutDetail;


// src/pages/Product.js
import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import delivery from '../Components/Assets/icon-delivery.svg';
import ReturnDelivery from '../Components/Assets/Icon-return.svg';

const Product = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
        return <p>Invalid product ID</p>;
    }

    const product = all_product.find(item => item.id === productId);

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
            <div className='img'>
                <img src={product.image} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
            <p>Price: ${product.price}</p>
            <div className='rating'>
                <img className="star" src={product.star} alt='star' />
                <span className='num'>{product.num}</span>
            </div>
            <hr />
            <div className='box'>
                <div className='top-box'>
                    <img src={delivery} alt='truck' />
                    <div className='content'>
                        <h5>Free Delivery</h5>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className='top-box'>
                    <img src={ReturnDelivery} alt='truck' />
                    <div className='content'>
                        <h5>Return Delivery</h5>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
