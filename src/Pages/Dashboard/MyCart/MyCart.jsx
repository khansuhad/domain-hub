import { MdDelete } from "react-icons/md";
import useCart from "../../../Hock/useCart";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPayment } from "../../../features/PaymentPrice/PaymentPrice";
import { PiCurrencyDollarFill } from "react-icons/pi";
import UseAuth from "../../../Hock/UseAuth";
import { addCartItemSelectedTime } from "../../../features/cartItemSelectedTime/cartItemSelectedTime";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import usePremiumUser from "../../../Hock/usePremiumUser";
import Loading from "../../../Component/Loading/Loading";
import { Helmet } from "react-helmet";
import Coupon from "./Coupon";

const MyCart = () => {
  const dispatch = useDispatch();
  const { isPremium, isPremiumLoading } = usePremiumUser();
  console.log("user, isPremium", isPremium);

  const [carts, loading, refetch] = useCart();
  const useAxios = useAxiosPublic();
  console.log(carts);
  const [couponCode, setCouponCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedTimes, setSelectedTimes] = useState({});
  console.log("DomainSelectTime", selectedTimes);
  const [cartItemSelectedTime, setCartItemSelectedTime] = useState([]); // State to store selected times for each domain item
  console.log("DomainSelectTime", cartItemSelectedTime);
  // store cartItemSelectedTime in state of redux
  dispatch(addCartItemSelectedTime(cartItemSelectedTime));
  // const axiosSecure = useAxiosSecure();

  const [discountPercentage, setDiscountPercentage] = useState(0);
  console.log(typeof totalPrice, totalPrice);

  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();

  const totalPriceMBM = useSelector((state) => state.payment.TotalBill);
  const email = user?.email;
  const cartItemSelectedTimeMBM = useSelector(
    (state) => state.cartItemTime.cartItemSelectedTime
  );
  console.log("Time",cartItemSelectedTimeMBM);
  const data = {
    totalPriceMBM,
    cartItemSelectedTimeMBM,
    email,
  };

  const handleTimeChange = (cartItemId, selectedTime) => {
    // Update the selected time for the specific domain item
    setCartItemSelectedTime((prevTimes) => {
      const updatedTimes = [...prevTimes];
      const existingItemIndex = updatedTimes.findIndex(
        (item) => item.id === cartItemId
      );
      if (existingItemIndex !== -1) {
        updatedTimes[existingItemIndex] = {
          id: cartItemId,
          time: selectedTime,
        };
      } else {
        updatedTimes.push({ id: cartItemId, time: selectedTime });
      }
      return updatedTimes;
    });

    setSelectedTimes((prevSelectedTimes) => ({
      ...prevSelectedTimes,
      [cartItemId]: selectedTime,
    }));
  };
  // ...

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = carts.reduce((acc, cartItem) => {
        const domainTotal =
          parseFloat(cartItem.price) * selectedTimes[cartItem._id];
        return acc + domainTotal;
      }, 0);

      setTotalPrice(total.toFixed(2));
    };

    calculateTotalPrice();
  }, [carts, discountPercentage, selectedTimes]);

  const paymentPrice = (
    parseFloat(totalPrice) -
    totalPrice * (discountPercentage / 100)
  ).toFixed(2);
  dispatch(addPayment(paymentPrice));

  // Calculate total price when carts or discountPercentage change

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Coupon code submitted: ${couponCode}`);
    if (couponCode === "FreePalestine") {
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
  console.log(totalPrice);

  // const cartItemSelectedTime = useSelector(
  //   (state) => state.cartItemTime.cartItemSelectedTime
  // );

  const handleSsl = () => {
    const priceForSsl = {
      totalPrice,
      email: user.email,
    };
    console.log(priceForSsl);
    axiosPublic
      .post("/order", priceForSsl)
      .then((res) => {
        window.location.replace(res.data.url);
        console.log(res.data);
        axiosPublic.put("/carts",data ).then((res) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Helmet>
        <title>DomainHub | My Cart</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {isPremiumLoading ? (
        <Loading />
      ) : (
        <div className="rounded-lg text-white dark:bg-black min-h-screen bg-firstColor ">
          <div className="flex justify-between bg-gradient-to-tr from-[#13104e] to-[#0193e1] ">
            <div className="flex flex-col justify-center w-3/4 items-center">
              <p className="text-2xl md:text-4xl lg:text-5xl w-full font-bold text-center text-white dark:text-white my-10">
                My Cart
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 m-2 pb-2">
                <Link to="/">
                  <button className="p-2 px-11  md:p-3 rounded-md text-black font-bold uppercase bg-secondColor hover:bg-thirdColor hover:text-white text-sm">
                    Home
                  </button>
                </Link>
                <Link to="/searchPage">
                  <button className="p-2 md:p-3 rounded-md text-black font-bold  uppercase bg-secondColor hover:bg-thirdColor hover:text-white text-sm">
                    Search Domain
                  </button>
                </Link>
                <Coupon />
                {/* <Link to="/searchPage">
                  <button className="p-2 md:p-3 rounded-md text-black font-bold  uppercase bg-secondColor hover:bg-thirdColor hover:text-white text-sm">
                    Coupon
                  </button>
                </Link> */}
              </div>
            </div>
            <div>
              <img
                className="pr-5 lg:h-[400px]"
                src="https://templates.hibootstrap.com/blim/default/assets/images/vps-header-shape.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row ">
            <div className="overflow-x-auto p-5 md:m-10 md:w-[60%] dark:text-white">
              <table className="table w-full border-2">
                {/* head */}
                <thead>
                  <tr>
                    <th className="text-xl font-bold text-white dark:text-white">
                      #
                    </th>

                    <th className="text-xl font-bold text-white dark:text-white">
                      Name
                    </th>
                    <th className="text-xl font-bold text-white dark:text-white">
                      Price
                    </th>
                    <th className="text-xl font-bold text-white dark:text-white pl-10">
                      Time
                    </th>
                    <th className="text-xl font-bold text-white dark:text-white">
                      Action
                    </th>
                  </tr>
                </thead>
                {carts.length === 0 ? (
                  <p className="text-xl font-bold my-5 pl-3">
                    {" "}
                    Your cart is empty.
                  </p>
                ) : (
                  <tbody>
                    {carts?.map((cartItem, index) => (
                      <tr key={cartItem._id}>
                        <th>{index + 1}</th>

                        <td>{cartItem.name}</td>
                        <td>
                          {selectedTimes[cartItem._id]
                            ? (
                                parseFloat(cartItem.price) *
                                selectedTimes[cartItem._id]
                              ).toFixed(2)
                            : "0.00"}{" "}
                          $
                        </td>

                        <td>
                          {/* Dropdown for selecting the number of years */}
                          <select
                            name="time"
                            value={selectedTimes[cartItem._id] || ""}
                            onChange={(e) =>
                              handleTimeChange(cartItem._id, e.target.value)
                            }
                            className="border border-purple-900 rounded p-2 font-bold bg-white text-black"
                          >
                            <option>Select time</option>
                            <option value="1">1 Year</option>
                            <option value="2">2 Years</option>
                            <option value="3">3 Years</option>
                            {/* Add more options as needed */}
                          </select>
                        </td>
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
              <div className="bg-fourthColor mb-5 p-2 rounded-md">
                {/* Coupon input form*/}
                <form onSubmit={handleSubmit} className="flex items-center">
                  {isPremium ? (
                    <input
                      type="text"
                      id="coupon-code"
                      name="coupon-code"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(event) => setCouponCode(event.target.value)}
                      className="border text-black border-gray-300 rounded-l-md py-[11px] px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  ) : (
                    <input
                      type="text"
                      id="coupon-code"
                      name="coupon-code"
                      placeholder="Coupon code"
                      value={couponCode}
                      disabled
                      onChange={(event) => setCouponCode(event.target.value)}
                      className="border text-black border-gray-300 rounded-l-md py-[11px] px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                  {isPremium ? (
                    <button
                      type="submit"
                      className={` bg-secondColor  text-black  font-bold py-[13px] px-4 rounded-r-md ${
                        !isPremium ? "" : `hover:text-white hover:bg-thirdColor`
                      }`}
                    >
                      Apply
                    </button>
                  ) : (
                    <button
                      disabled
                      className={` bg-secondColor  text-black  font-bold py-[13px] px-4 rounded-r-md ${
                        !isPremium ? "" : `hover:text-white hover:bg-thirdColor`
                      }`}
                    >
                      Apply
                    </button>
                  )}
                </form>
                {isPremium ? (
                  ""
                ) : (
                  <p className="text-red-600 mt-2">
                    Only premium user can use coupon{" "}
                    <Link
                      to={"/dashboard/profile"}
                      className="font-bold underline text-secondColor"
                    >
                      Get premium
                    </Link>
                  </p>
                )}
              </div>

              <div className="bg-fourthColor w-full p-2 leading-10 rounded">
                <div className="flex justify-between">
                  <p className="font-bold"> Total Price: </p>
                  {/* total price */}
                  <p>
                    {isNaN(totalPrice)
                      ? "0.00"
                      : parseFloat(totalPrice).toFixed(2)}{" "}
                    $
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold"> Discount: </p>
                  {/* Discount price */}
                  <p>
                    -
                    {isNaN(totalPrice) || isNaN(discountPercentage)
                      ? "0.00"
                      : (
                          parseFloat(totalPrice) *
                          (discountPercentage / 100)
                        ).toFixed(2)}{" "}
                    $
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold"> Total: </p>
                  {/* total price for payment */}
                  <p className="font-bold">
                    {" "}
                    {!isNaN(totalPrice) && !isNaN(discountPercentage)
                      ? (
                          parseFloat(totalPrice) -
                          totalPrice * (discountPercentage / 100)
                        ).toFixed(2)
                      : "0.00"}{" "}
                    $
                  </p>
                </div>

                <button
                  className="btn btn-block text-sm uppercase md:text-xl font-bold bg-secondColor hover:bg-thirdColor"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Make purchase
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box bg-blue-200">
                    <form method="dialog" className="my-10">
                      {totalPrice < 100 ? (
                        <>
                          <div className="flex items-center gap-2">
                            <p className=" text-red-500">
                              Please Buy Minimum 100{" "}
                            </p>
                            <PiCurrencyDollarFill className="text-xl text-red-600" />
                          </div>
                          <div>
                            <button
                              disabled
                              className="btn btn-block bg-secondColor hover:bg-thirdColor text-white text-xl mr-5 mt-2"
                            >
                              Pay with stipe
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex md:flex-row flex-col items-center gap-5">
                            <div>
                              <img
                                className="h-[100px] w-[200px] mx-auto"
                                src="https://ph-files.imgix.net/e4a4c183-dc15-4f46-9193-f80758fb3d90.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=676&h=380&fit=max&dpr=3"
                                alt=""
                              />

                              <Link
                                to={"/dashboard/checkout"}
                                className="btn uppercase btn-block bg-secondColor hover:bg-thirdColor text-black hover:text-white text-lg mr-5 mt-2"
                              >
                                Pay with stipe
                              </Link>
                            </div>

                            <div>
                              <img
                                className="h-[100px] w-[200px] mx-auto"
                                src="https://th.bing.com/th/id/R.8cafcc57d908bf15ecd0a48ef1923bed?rik=FSNyKh%2fagJ10IQ&pid=ImgRaw&r=0"
                                alt=""
                              />
                              <button
                                onClick={handleSsl}
                                className="btn uppercase btn-block bg-purple-500 hover:bg-thirdColor text-black hover:text-white text-lg mr-5 mt-2"
                              >
                                Pay With another
                              </button>
                            </div>
                          </div>
                        </>
                      )}

                      <button className="btn btn-sm btn-circle text-black btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCart;
