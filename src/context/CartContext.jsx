import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);



  const addToCart = (product) => {
    setCartItems(currentItems => {
      // Check if the product is already in the cart
      const existingProductIndex = currentItems.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        // Product exists, update the quantity
        return currentItems.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, quantity: (item.quantity || 1) + 1 };
          }
          return item;
        });
      } else {
        // Product does not exist, add new product with quantity 1
        return [...currentItems, { ...product, quantity: 1 }];
      }
    });
  };
  // ----------Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems(currentItems => currentItems.filter(item => item.id !== productId));
  };



  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.price); // Ensure price is a number
    const itemQuantity = item.quantity || 1; // Default to 1 if quantity is not set
  
    // Check if both values are numbers before adding to total
    if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
      return total + (itemPrice * itemQuantity);
    }
    return total;
  }, 0);

const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
 

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, subtotal, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
