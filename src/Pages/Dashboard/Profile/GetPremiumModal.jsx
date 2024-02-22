import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { IoDiamond } from "react-icons/io5";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import toast from "react-hot-toast";

const GetPremiumModal = ({ info, refetchInfo }) => {
  const navigate = useNavigate();
  const paymentSuccessToast = () => toast.success("Payment successfully");
  const axiosSecure = useAxiosSecure();
  const handlePremium = () => {
    axiosSecure
      .put(`/get-premium-use-point?email=${info?.email}`)
      .then((res) => {
        navigate("/dashboard/profile");
        paymentSuccessToast();
        refetchInfo();
      });
  };
  return (
    <div>
      <button
        className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 mt-5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Get premium
      </button>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-fourthColor border shadow-2xl  border-secondColor dark:border-sixthColor text-white dark:text-sixthColor text-lg lg:text-xl  font-bold text-center">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl my-3 font-bold">
            Get premium
          </h1>
          <Link
            to={"/dashboard/make-premium-checkout"}
            className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 m-5"
          >
            Pay 99 $
          </Link>
          {info.point >= 99 ? (
            <button
              onClick={handlePremium}
              className="btn bg-thirdColor hover:bg-fourthColor text-white border-0 m-5"
            >
              Use 99 <IoDiamond />
            </button>
          ) : (
            <button className="btn bg-thirdColor hover:bg-thirdColor cursor-not-allowed text-white border-0 m-5">
              Use 99 <IoDiamond />
            </button>
          )}
        </div>
      </dialog>
    </div>
  );
};

GetPremiumModal.propTypes = {
  info: PropTypes.object,
  refetchInfo: PropTypes.func,
};

export default GetPremiumModal;
