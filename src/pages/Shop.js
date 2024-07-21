
import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/banner/Banner';
import Popular from '../Components/Popular/Popular';

const Shop = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearchChange = (keyword) => {
        setSearchKeyword(keyword);
    };

    return (
        <div>
            <Navbar onSearchChange={handleSearchChange} />
            <Banner />
            <Popular searchKeyword={searchKeyword} />
        </div>
    );
};

export default Shop;
