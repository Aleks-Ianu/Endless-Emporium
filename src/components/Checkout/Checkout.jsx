import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useCart } from "../../context/CartContext"; // Go up two levels




let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51Obq32BBELVsrCQlygJxZMaJwE57eBe9yvZuppDwh9ZBoudXtasqPpF4j1aPvV2ZSY0V1mizIhn2JwVMxzfXTTg900Osrq91RM");
    // process.env.REACT_APP_STRIPE_KEY
  }

  return stripePromise;
};

const Checkout = () => {
  const { cartItems, subtotal } = useCart()
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1OcCcCBBELVsrCQlKjILwRae",
    quantity: 1
  };

  const lineItems = cartItems.map(item => ({
    price_data: {
      currency: 'GBP',
      product_data: {
        name: item.title,
      },
      unit_amount: item.price * 100, // Stripe expects the amount in cents
    },
    quantity: item.quantity || 1,
  }));

  const checkoutOptions = {
    lineItems,
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
      <p className="checkout-description">Your Order</p>
      <h1 className="checkout-price">Total: £{subtotal.toFixed(2)}</h1>
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
          <p className="text">{isLoading ? "Loading..." : "Checkout"}</p>
        </div>
      </button>
    </div>
  );
};

export default Checkout;