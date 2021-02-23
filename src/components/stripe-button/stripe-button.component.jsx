import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
 
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price + 100;
  const publishableKey = 'pk_test_51INz3AG0G5f3ij65jdOPoWhXWMrjAH3tkQ5ZIikiM7es4ioWdEOsEgJR9IPTDa4qcFLxbjXrqwf30KIw5zFe7tMD00b6jJk2yq'

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='http://www.w3.org/2000/svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel=' Pay Now '
      token={onToken}
      stripeKey={publishableKey}
    /> 
  );
};

export default StripeCheckoutButton;