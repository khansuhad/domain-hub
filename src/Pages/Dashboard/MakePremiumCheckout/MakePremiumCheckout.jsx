import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MakePremiumCheckoutForm from "./MakePremiumCheckoutForm";
import { Helmet } from "react-helmet";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const MakePremiumCheckout = () => {
  return (
    <div>
      <Helmet>
        <title>DomainHub | Premium Checkout</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Elements stripe={stripePromise}>
        <MakePremiumCheckoutForm></MakePremiumCheckoutForm>
      </Elements>
    </div>
  );
};

export default MakePremiumCheckout;
