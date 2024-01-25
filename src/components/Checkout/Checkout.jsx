import React, { useContext } from 'react'; // Add useContext to your import
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "../../context/CartContext";


let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51Obq32BBELVsrCQlygJxZMaJwE57eBe9yvZuppDwh9ZBoudXtasqPpF4j1aPvV2ZSY0V1mizIhn2JwVMxzfXTTg900Osrq91RM");
    // process.env.REACT_APP_STRIPE_KEY
  }

  return stripePromise;
};

const Checkout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1OcCcCBBELVsrCQlKjILwRae",
    quantity: 1
  };

  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Stripe Checkout</h1>
      <h1 className="checkout-price">£{subtotal.toFixed(2)}</h1>
      <img
        className="checkout-product-image"
        // src={ProductImage}
        alt="Product"
      />
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <div className="grey-circle">
          <div className="purple-circle">
            {/* <img className="icon" src={CardIcon} alt="credit-card-icon" /> */}
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;