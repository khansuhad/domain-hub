/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import UseAuth from "../../../Hock/UseAuth";
import useAxiosPublic from "../../../Hock/useAxiosPublic";

const ReviewModal = ({ trueCart, index, refetch }) => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    // inputvalues
    const userName = form.userName.value;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const cartId = form.cartId.value;
    const rating = parseInt(form.rating.value);
    const domainName = form.domainName.value;
    const feedback = form.feedback.value.toLowerCase();
    const reviewDetail = {
      userName,
      userEmail,
      userPhoto,
      cartId,
      rating,
      feedback,
      domainName,
    };

    axiosPublic.post("/review", reviewDetail).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thank You For Your FeedBack");
      }
      refetch();
    });
    axiosPublic.put(`/cart/${cartId}`).then((res) => {
      if (res.data.modifiedCount) {
        alert("update status");
        refetch();
      }
    });
  };
  return (
    <>
      <input type="checkbox" id={index + 1} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-96 relative">
          <label
            htmlFor={index + 1}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleReview}
            method="dialog"
            className="w-full h-[500px]"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="userName"
                className="input input-bordered"
                required
                defaultValue={user?.displayName}
                readOnly
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Cart ID</span>
              </label>
              <input
                type="text"
                name="cartId"
                className="input input-bordered"
                required
                defaultValue={trueCart?._id}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Domain Name</span>
              </label>
              <input
                type="text"
                name="domainName"
                className="input input-bordered"
                required
                defaultValue={trueCart?.name}
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating Out Of 5</span>
              </label>
              <input
                type="number"
                placeholder="Input Your Rating"
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Any Feedback?</span>
              </label>
              <textarea
                type="text"
                className="textarea textarea-bordered"
                name="feedback"
                placeholder="Tell Your Feedback"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-outline btn-sm mt-4 w-full"
            >
              Review
            </button>
            <button className="btn btn-outline btn-sm ml-[500px] mt-5">
              X
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;