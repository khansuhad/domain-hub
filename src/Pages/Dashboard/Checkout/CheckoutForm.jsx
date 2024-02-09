import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import UseAuth from "../../../Hock/UseAuth";
import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import useCart from "../../../Hock/useCart";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import moment from "moment";

const CheckoutForm = () => {
 
  const totalPrice = useSelector((state) => state.payment.TotalBill);
  const paymentSuccessToast = () => toast.success("Payment successfully");
  const paymentErrorToast = () => toast.error("Something went wrong");
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const email = user?.email ;
  const navigate = useNavigate();
  

  const [carts] = useCart();
  console.log("Cart", carts);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log("useEffect", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  console.log("clientSecret", clientSecret);
  console.log("stripe", stripe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
      paymentErrorToast();
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        console.log(transactionId);

        // now save the payment in the database
        axiosSecure.put("/carts", carts).then((res) => {
          console.log("cart", res.data);
          const messages = "Your domain payment is successful";
          const status = "unread";
          const timeSpace = moment();
          const domainName = '' ;
          axiosSecure.post("/notifications" ,{ messages ,timeSpace , domainName, status , email} ).then(res => {
            console.log(res.data);
          })
          navigate("/dashboard/my-all-domains");
          paymentSuccessToast();
        });
      }
    }
  };

  return (
    <Container>
      <div className="p-5">
        <div className="max-w-6xl mx-auto border-2 rounded border-thirdColor px-5 sm:px-10 py-10">
          <Heading>Payment</Heading>
          <h1 className="text-lg md:text-xl lg:text-3xl my-5 font-bold text-white dark:text-[#F5F7F8] ">
            Total Price {totalPrice}
          </h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Payment">
              <p className="text-white">Payment</p>
              <CardElement
                placeholder="Payment"
                className="py-3 px-4 block w-full border border-thirdColor rounded-md text-sm focus:border-fourthColor focus:ring-fourthColor outline-none mt-2"
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#ffffff",
                      "::placeholder": {
                        color: "#808080",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
            </label>

            <p className="text-red-600">{error}</p>
            <div className="text-center mt-5">
              <button
                type="submit"
                disabled={!stripe || !clientSecret}
                className="btn bg-thirdColor hover:bg-fourthColor text-white border-0"
              >
                Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutForm;
