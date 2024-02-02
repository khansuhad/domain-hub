import { useSelector } from "react-redux";
import img from "../../../assets/bannerImg/domain_pix.png"
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCart from "../../../Hock/useCart";

const CategoryDetails = () => {
    const [searchedDomain, setSearchedDomain] = useState("")
    const [notAvailable, setNotAvailable] = useState("")
    const navigate = useNavigate()
    const userInfo = useSelector((state) => state.user.currentUser);
    const domainDetails = useSelector((state) => state.domain.domain)
    const axiosSecure = useAxiosPublic()
    const [cart] = useCart()
    const bookedDomains = cart?.filter(item => item.payment === "true")
    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const searchData = form.domain.value
        const domainSearched = searchData.concat(domainDetails?.name)
        const domain= domainSearched.toLowerCase()
        console.log("lowercase domain",domain);
        const findDomain = bookedDomains.filter(item => item.name === domain)
        console.log("test status", findDomain?.length);
        if (findDomain?.length > 0) {
            setNotAvailable("Sorry! this domain is already taken.")
            setSearchedDomain("")
        }
        else {
            setSearchedDomain(domain)
            setNotAvailable("")
        }
    }
    console.log("domain searched",searchedDomain);
    const cartItem = {
        name: searchedDomain,
        category: domainDetails?.category,
        price: domainDetails?.price,
        description: domainDetails?.description,
        email: userInfo?.email,
        review: "false",
        payment:"false"
    }
    const handleCart = () => {
        axiosSecure.post("/carts", cartItem)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data);
                    toast.success("Successfully Added to Cart!")
                    navigate("/")
                }
            }
            )
    }
    return (
        <div className="container mx-auto dark:text-white pt-32">
            <div className="mb-4 flex flex-col md:flex-row justify-around items-center pt-24 pb-16  dark:text-black bg-fourthColor rounded-xl">
                <div className="space-y-5">
                    <p className="text-xl font-semibold text-white"> <span className="bg-blue-700 text-white p-1 rounded ">{domainDetails?.name}</span>  Domain Names</p>
                    <p className="text-4xl font-bold text-white">{domainDetails?.description}</p>
                    <p className="text-xl font-semibold text-white">Available now! Starting at</p>
                    <p className="text-4xl font-semibold bg-blue-700 text-white p-1 rounded w-fit">${domainDetails?.price}/yr</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="mx-28">
                <p className="text-2xl text-center mb-4 font-bold text-white ">Start your {domainDetails?.name} domain search now.</p>
                <div >
                    <form action="" onSubmit={handleSearch} className="flex justify-center gap-2">
                        <div className="relative w-full max-w-2xl">
                            <input type="text" name="domain" placeholder="Enter your domain name" className="w-full text-black max-w-2xl p-3 rounded-lg outline-info border-2 border-black" />
                            <p className="p-3 bg-blue-700 text-white absolute right-0 top-0 rounded-r-lg border-slate-700 border-2">{domainDetails?.name}</p>
                        </div>

                        <button type="submit" className="block select-none rounded-lg bg-secondColor hover:bg-thirdColor border-b-2 py-2 px-4 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">search</button>
                    </form>
                    <div>
                        {searchedDomain?.length > 0 ?
                            <div>
                                <p className="text-center mt-4 text-xl font-semibold">Congrats! Your Domain is available.</p>
                                <div className="flex justify-center w-full max-w-3xl flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-[#23668a] bg-clip-border p-2 text-white shadow-md shadow-gray-500 mx-auto mt-1 md:mt-5">
                                    <div className="flex justify-between">
                                        <p>{searchedDomain}</p>
                                        <div className="flex gap-1 cursor-pointer" onClick={handleCart} > <span>Add to cart </span> <MdAddShoppingCart className="  text-2xl " /></div>
                                    </div>
                                </div>
                            </div> : <div>
                                <p className="text-xl text-center mt-5 font-semibold text-red-600">{notAvailable}</p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;