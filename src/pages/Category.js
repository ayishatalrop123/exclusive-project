
import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import ProductList from '../Components/ProductList/ProductList'; 

const Category = ({ searchKeyword }) => {
    const [localSearchKeyword, setLocalSearchKeyword] = useState(searchKeyword);

    const handleSearchChange = (newSearchKeyword) => {
        setLocalSearchKeyword(newSearchKeyword);
    };

    return (
        <div>
            <Navbar onSearchChange={handleSearchChange} />
            <ProductList searchKeyword={localSearchKeyword} />
        </div>
    );
};

export default Category;
