import { MdDelete } from "react-icons/md";
import useCart from "../../../Hock/useCart";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { useEffect, useState } from "react";

const MyCart = () => {
    const [carts, loading, refetch] = useCart();
    const useAxios = useAxiosPublic();
    console.log(carts);
    const [couponCode, setCouponCode] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);


    // Calculate total price when carts or discountPercentage change
    useEffect(() => {
        const calculateTotalPrice = () => {
            const totalPrice = carts.reduce((acc, cartItem) => acc + cartItem.price, 0);
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
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(cartItem._id);
                const res = await useAxios.delete(`/carts/${cartItem._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: " Item has been deleted",
                        icon: "success"
                    });
                }

            }
        });
    }
    return (
        <div className="  p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center my-10">My Cart</h2>


            <div className="flex flex-col md:flex-row">

                <div className="md:overflow-x-auto p-5 md:m-10 md:w-[60%]">
                    <table className="table w-full border-2">
                        {/* head */}
                        <thead >
                            <tr>
                                <th className="text-xl font-bold">
                                    #
                                </th>

                                <th className="text-xl font-bold">Name</th>
                                <th className="text-xl font-bold">Price</th>
                                <th className="text-xl font-bold">Action</th>
                            </tr>
                        </thead>
                        {carts.length === 0 ? (
                            <p className="text-xl font-bold my-5">Your cart is empty.</p>
                        ): <tbody>
                            {
                                carts?.map((cartItem, index) => <tr key={cartItem._id}>
                                    <th>
                                        {index + 1}
                                    </th>

                                    <td>
                                        {cartItem.name}
                                    </td>
                                    <td>${cartItem.price}</td>
                                    <td>
                                        <MdDelete onClick={() => handleDeleteItem(cartItem)} className="text-red-500 ml-2 cursor-pointer text-xl" />
                                    </td>
                                </tr>)
                            }


                            {/* row 1 */}

                        </tbody>}



                    </table>

                </div>

                <div className=" md:w-[40%] p-5 md:m-10">
                    <div className="bg-white mb-5 p-2 ">
                        {/* Coupon input form*/}
                        <form onSubmit={handleSubmit} className="flex items-center">
                            <label htmlFor="coupon-code" className="sr-only">
                                Coupon code
                            </label>
                            <input
                                type="text"
                                id="coupon-code"
                                name="coupon-code"
                                placeholder="Coupon"
                                value={couponCode}
                                onChange={(event) => setCouponCode(event.target.value)}
                                className="border border-gray-300 rounded-l-md py-2 px-4 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className=" bg-thirdColor hover:bg-fourthColor text-white font-bold py-2 px-4 rounded-r-md"
                            >
                                Apply
                            </button>
                        </form>


                    </div>

                    <div className="bg-white w-full p-2 leading-10 ">
                        <div className="flex justify-between">
                            <p className="font-bold"> Total Price: </p>
                            <p> {totalPrice.toFixed(2)} $</p>

                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold"> Discount: </p>
                            <p> -{(totalPrice * (discountPercentage / 100)).toFixed(2)} $</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold"> Total: </p>
                            <p className="font-bold">{(totalPrice - (totalPrice * (discountPercentage / 100))).toFixed(2)} $</p>
                        </div>
                        <button className="btn btn-block bg-thirdColor hover:bg-fourthColor text-white text-xl mr-5 mt-2">
                            make purchase
                        </button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default MyCart;







