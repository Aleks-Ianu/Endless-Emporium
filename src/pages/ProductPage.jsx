import React from 'react';
import Navbar from '../components/NavBar';
import Product from '../components/Product';

function ProductsPage() {
    return (
        <div className="productsPage">
            <Navbar /> 
            <Product />

        </div>
    );
}

export default ProductsPage;