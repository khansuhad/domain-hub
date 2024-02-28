import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Checkout = () => {
  return (
    <div>
      <Helmet>
        <title>DomainHub | Checkout</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Checkout;
