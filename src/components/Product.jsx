import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { RadioGroup } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import '../styling.css'


const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const sizeOptions = [
    { name: 'Small', inStock: true },
    { name: 'Medium', inStock: true },
    { name: 'Large', inStock: true },
    { name: 'XLarge', inStock: true },
  
    // Add more sizes as needed
  ];

  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;
  
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  

  const handleAddToCart = () => {
    console.log("Adding to cart", product)
    addToCart(product);
 
    // You can also implement feedback to the user, like a confirmation message
  };


  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
            {/* {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))} */}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.title}
              </a>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mx-auto mt-6 sm:px-6 ">
          {product.image && product.image.length > 0 && (
            <div className="flex justify-center h-72 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.image}
            />
          </div>
          )}
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">£{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <p></p>
              <p>{product.rating.rate} / 5</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                {product.rating.count} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              {/* <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3> */}

                {/* <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup> */}
              {/* </div> */}

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  
                  <p>Chat to our tech buddy below for our size guide</p>
                
                  
                </div>
               
                   

                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {sizeOptions.map((size) => (
                      <RadioGroup.Option
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active, checked }) =>
                      classNames(
                        size.inStock ? 'cursor-pointer bg-white text-gray-900 shadow-sm' : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        active || checked ? 'ring-2 ring-indigo-500 bg-indigo-100' : '',
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                        'transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-100 hover:text-indigo-700'
                      )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                          {size.inStock && (
                            <span
                              className={classNames(
                                active || checked ? 'border-transparent' : 'border-2 border-gray-200',
                                'pointer-events-none absolute -inset-px rounded-md'
                              )}
                              aria-hidden="true"
                            />
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="button"
                className=" animated-button flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={handleAddToCart}
                
              >
                
                Add to bag
              </button>
              <br />
              <p>Shipping costs are calculated at checkout</p>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              

              <div className="mt-4">
                <ul role="list" className="pl-4 space-y-2 text-sm list-disc">
                  {/* {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;