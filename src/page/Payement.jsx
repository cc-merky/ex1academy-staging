import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../services/LoginAuthContext';

const Payment = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePaystackSuccessAction = (response) => {
    console.log('Transaction was successful', response);

    // You should send `response.reference` to your server to verify the transaction
    fetch('https://e1x.nueoffshore.com/api/payment/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any headers your server expects, such as authorization tokens
      },
      body: JSON.stringify({
        reference: response.reference
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log(data); // Handle the response from your server here
      // Redirect user or show success message
    })
    .catch(error => {
      console.error('Payment verification error', error);
      // Handle the error state here
    });
  };

  const handlePaystackCloseAction = () => {
    console.log('User closed the payment window');
    // Handle the state when payment window is closed by the user
  };

  const initializePayment = () => {
    const PaystackPop = window.PaystackPop;
    const paymentEngine = PaystackPop.setup({
      key: 'pk_test_11b85318de9eb6155e5daece5a52cc3784471002', // Replace with your public key
      email: user.email, // Customer email
      amount: 10000, // Amount in kobo
      currency: 'NGN', // Currency
      plan: 'PLN_9i2mehr6xb59eqv', // Replace with your Paystack plan code
      ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Generate a random reference number
      callback: handlePaystackSuccessAction,
      onClose: handlePaystackCloseAction,
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: user.name,
          },
        ],
      },
    });

    paymentEngine.openIframe();
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <button onClick={initializePayment} disabled={!user.email}>Subscribe</button>
    </div>
  );
};

export default Payment;
