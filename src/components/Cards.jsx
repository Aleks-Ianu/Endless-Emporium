
// // const products = [
// //     {
// //       id: 1,
// //       name: 'Earthen Bottle',
// //       href: '#',
// //       price: '$48',
// //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
// //       imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
// //     },
// //     {
// //       id: 2,
// //       name: 'Nomad Tumbler',
// //       href: '#',
// //       price: '$35',
// //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
// //       imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
// //     },
// //     {
// //       id: 3,
// //       name: 'Focus Paper Refill',
// //       href: '#',
// //       price: '$89',
// //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
// //       imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
// //     },
// //     {
// //       id: 4,
// //       name: 'Machined Mechanical Pencil',
// //       href: '#',
// //       price: '$35',
// //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
// //       imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
// //     },
// //     // More products...
// //   ]
  
    import React, { useState, useEffect } from 'react';
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
      console.log(products);
      return (
        <div className="w-full bg-white me-auto">
          <div className="max-w-2xl px-2 py-8 mx-auto sm:px-4 sm:py-12 lg:max-w-7xl lg:px-6">
            <h2 className="sr-only">Products</h2>
    
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href="https://www.google.com" className="group">
                  <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover object-center w-full h-full group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">£{product.price}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    };
    export default FakeStoreProductComponent;