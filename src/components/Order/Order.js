import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NavBar from '../NavBar/NavBar';
import { loadStripe } from "@stripe/stripe-js";



// import CardIcon from "../images/credit-card.svg";
// import ProductImage from "../images/product-image.jpg";


import './Order.css';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

export const Order = (cart,setCart) => {

  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const countBill = () => {
    let q = 0;
    for (let p of cart.cart){
      q += p[2];
    }
      return q;
  }

  const item = {
    price: "price_1NbetpBoWuxzcKH7D7oUyvdP",
    quantity: countBill()
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    if (document.getElementById('payment').value=='online'){
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    
    if (error) setStripeError(error.message);
    setLoading(false);}
  };

  if (stripeError) alert(stripeError);

  const form = useRef();

  const clean = () => {
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("adress").value='';
    document.getElementById("payment").value='';
    document.getElementById("message").value='';
    document.getElementById("order").value='';
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pxhesoc', 'template_yd4krge', form.current, 'FGSFEuSvUN4zZKAIf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }).then((res) => {
        if (document.getElementById('payment').value=='online'){
          document.getElementById('super').disabled=isLoading;
        }
      }).then(() => {
          clean();
      });
  };

  const cash = () => {
    console.log('cash');
  }

  const quantityChange = (event) => {
    const idd = event.target.id;
    
    const edit = cart.cart.find((p) => 
      p[1] == idd
    )

    const ep = cart.cart.indexOf(edit);

    const fArr = cart.cart.filter((p) => 
      p[1] !== idd
    );
  
    if (document.getElementById(idd).value !== ''){
      edit[2] = Number(document.getElementById(idd).value);
      const newArr = [...fArr.slice(0,ep), edit, ...fArr.slice(ep)];
      cart.setCart(newArr);
    }
  }

  const check = () => {
    return cart.cart.map((p) => <><label>{p[1].slice(8, -4)}</label><input onChange={quantityChange} id={p[1]} defaultValue={p[2]} type="number" /></>)
  }

  const bill = () => {
    const b = cart.cart.map((p) => `${p[1].slice(8, -4)}  Q:${p[2]} \n`);
    const bi = b.join('\n');
    const bil = bi + '\nOverall: ' + countBill() * 15 + '$';
    return bil;
  }

  return (
    <div className='order'>
      <div className='o'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name: </label>
        <input id="name" type="text" name="name" required />
        <label>Email: </label>
        <input id="email" type="email" name="email" required />
        <label>Phone Number: </label>
        <input id="message" name="message" required />
        <label>Adress:</label>
        <input id='adress' name='adress' required />
        <label>Payment method</label>
        <select name="payment" id="payment">
          <option value="cash">Cash</option>
          <option value="online" selected>Online</option>
        </select>
        <label>Your order ({countBill()*15}$):</label>
        {/* {<textarea id="order" defaultValue={cart.cart} name="order" readOnly></textarea>} */}
        {check()}
        
        <textarea style={{display: 'none'}} id="order" defaultValue={bill()} name="order" readOnly></textarea>

        <input onClick={ redirectToCheckout } id='super' type="submit" value="Send" />
      </form>
      <img id='p' src='/assets/payment.png' />
      </div>
      <NavBar cart={cart} />
    </div>
  );
};

export default Order;