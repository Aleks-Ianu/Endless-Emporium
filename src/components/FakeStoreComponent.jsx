import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FakeStoreProductComponent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  
  return (
    <div>
      <h2>FakeStore Products</h2>
      {products.map(product => (
  <div key={product.id}>
    <ul>
    <img src={product.image} alt="product image" />
    <li key={product.id}>{product.title}</li>
    </ul>
  </div>
  ))}
  
    </div>
  );

}

export default FakeStoreProductComponent;

