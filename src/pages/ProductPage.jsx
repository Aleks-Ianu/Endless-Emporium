import React from 'react';
import NavBar from '../components/Navbar';
import Product from '../components/Product';

function ProductsPage({ toggleCartModal }) {
    return (
        <div className="productsPage">
            <NavBar toggleCartModal={toggleCartModal}/> 
            <Product />

        </div>
    );
}

export default ProductsPage;