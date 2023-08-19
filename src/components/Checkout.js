import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import CardIcon from "../images/credit-card.svg";
import ProductImage from "../images/product-image.jpg";

import "../styles.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};


const Checkout = ({cart}) => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "",
    quantity: cart.cart.length
  };

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
      
        {/* {<div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>} */}
    </div>
  );
};

export default Checkout;
