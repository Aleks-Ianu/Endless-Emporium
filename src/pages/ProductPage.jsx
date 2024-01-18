import React from 'react';
import NavBar from '../components/NavBar';
import Product from '../components/Product';

function ProductsPage() {
    return (
        <div className="productsPage">
            <NavBar /> 
            <Product />

        </div>
    );
}

export default ProductsPage;