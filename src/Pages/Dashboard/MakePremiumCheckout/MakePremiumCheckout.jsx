import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import MakePremiumCheckoutForm from "./MakePremiumCheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const MakePremiumCheckout = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <MakePremiumCheckoutForm></MakePremiumCheckoutForm>
      </Elements>
    </div>
  );
};

export default MakePremiumCheckout;
