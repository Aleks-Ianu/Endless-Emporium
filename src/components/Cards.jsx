
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    
    const FakeStoreProductComponent = () => {
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://fakestoreapi.com/products/');
            setProducts(response.data);
            console.log(products);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, []);
      

      const navigate = useNavigate();
      return (
        <div className="w-full bg-white me-auto">
          <div className="max-w-2xl px-2 py-8 mx-auto sm:px-4 sm:py-12 lg:max-w-7xl lg:px-6">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8 ">
              {products.map((product) => (
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                <a key={product.id} onClick={() => navigate(`/product/${product.id}`)} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover object-center w-full h-full group-hover:opacity-75 "
                      />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700 pl-2 no-underline">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900 pl-2 no-underline">£{product.price}</p>
                </a>
              </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    export default FakeStoreProductComponent;