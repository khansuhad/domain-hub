import { MdDelete } from "react-icons/md";
import useCart from "../../../Hock/useCart";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPayment } from "../../../features/PaymentPrice/PaymentPrice";
import { PiCurrencyDollarFill } from "react-icons/pi";

const MyCart = () => {
  const dispatch = useDispatch();
  const [carts, loading, refetch] = useCart();
  const useAxios = useAxiosPublic();
  console.log(carts);
  const [couponCode, setCouponCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const paymentPrice = (
    parseFloat(totalPrice) -
    totalPrice * (discountPercentage / 100)
  ).toFixed(2);
  dispatch(addPayment(paymentPrice));

  // Calculate total price when carts or discountPercentage change
  useEffect(() => {
    const calculateTotalPrice = () => {
      const totalPrice = carts.reduce(
        (acc, cartItem) => acc + cartItem.price,
        0
      );
      setTotalPrice(totalPrice);
    };

    calculateTotalPrice();
  }, [carts, discountPercentage]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Coupon code submitted: ${couponCode}`);
    if (couponCode === "1234") {
      setDiscountPercentage(20);
    } else {
      setDiscountPercentage(0);
    }
  };

  const handleDeleteItem = (cartItem) => {
    console.log(cartItem);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(cartItem._id);
        const res = await useAxios.delete(`/carts/${cartItem._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();

          Swal.fire({
            title: "Deleted!",
            text: " Item has been deleted",
            icon: "success",
          });
        }
      }
    });
  };
  return (
    <div className="rounded-lg text-white dark:bg-[#191919] bg-firstColor">
      <div className="flex justify-between bg-gradient-to-tr from-[#13104e] to-[#0193e1] ">
        <div className="flex flex-col justify-center w-3/4 items-center">
          <p className="text-2xl w-full font-bold text-center text-white dark:text-white my-10">My Cart</p>
          <div className="flex gap-2">
            <Link to="/"><button className="btn text-black font-bold uppercase bg-cyan-500">Home</button></Link>
            <Link to="/searchPage">
              <button className="btn text-black font-bold  uppercase bg-cyan-500">Search Domain</button>
            </Link>
          </div>


        </div>
        <div>
          <img className="pr-5 lg:h-[400px]" src="https://templates.hibootstrap.com/blim/default/assets/images/vps-header-shape.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row " >
        <div className="md:overflow-x-auto p-5 md:m-10 md:w-[60%] dark:text-white">
          <table className="table w-full border-2 min-h-[]">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl font-bold text-white dark:text-white">#</th>

                <th className="text-xl font-bold text-white dark:text-white">Name</th>
                <th className="text-xl font-bold text-white dark:text-white">Price</th>
                <th className="text-xl font-bold text-white dark:text-white">Action</th>
              </tr>
            </thead>
            {carts.length === 0 ? (
              <p className="text-xl font-bold my-5 pl-3">  Your cart is empty.</p>
            ) : (
              <tbody>
                {carts?.map((cartItem, index) => (
                  <tr key={cartItem._id}>
                    <th>{index + 1}</th>

                    <td>{cartItem.name}</td>
                    <td>${cartItem.price}</td>
                    <td>
                      <MdDelete
                        onClick={() => handleDeleteItem(cartItem)}
                        className="text-red-500 ml-2 cursor-pointer text-xl"
                      />
                    </td>
                  </tr>
                ))}

                {/* row 1 */}
              </tbody>
            )}
          </table>
        </div>

        <div className=" md:w-[40%] p-5 md:m-10">
          <div className="bg-fourthColor mb-5 p-2 ">
            {/* Coupon input form*/}
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="text"
                id="coupon-code"
                name="coupon-code"
                placeholder="Coupon"
                value={couponCode}
                onChange={(event) => setCouponCode(event.target.value)}
                className="border text-black border-gray-300 rounded-l-md py-2 px-4 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className=" bg-secondColor hover:bg-thirdColor text-white font-bold py-2 px-4 rounded-r-md"
              >
                Apply
              </button>
            </form>
          </div>

          <div className="bg-fourthColor w-full p-2 leading-10 rounded">
            <div className="flex justify-between">
              <p className="font-bold"> Total Price: </p>
              <p> {parseFloat(totalPrice).toFixed(2)} $</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold"> Discount: </p>
              <p>
                {" "}
                -
                {(parseFloat(totalPrice) * (discountPercentage / 100)).toFixed(
                  2
                )}{" "}
                $
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold"> Total: </p>
              <p className="font-bold">
                {(
                  parseFloat(totalPrice) -
                  totalPrice * (discountPercentage / 100)
                ).toFixed(2)}{" "}
                $
              </p>
            </div>

            {totalPrice < 100 ? (
              <>
                <div className="flex items-center gap-2">
                  <p className=" text-red-500">Please Buy Minimum 100   </p><PiCurrencyDollarFill className="text-xl text-red-600" />
                </div>
                <button
                  disabled
                  className="btn btn-block bg-secondColor hover:bg-thirdColor text-white text-xl mr-5 mt-2"
                >
                  make purchase
                </button>
              </>
            ) : (
              <Link
                to={"/dashboard/checkout"}
                className="btn btn-block bg-secondColor hover:bg-thirdColor text-white text-xl mr-5 mt-2"
              >
                make purchase
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
