import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import useDomain from "../../Hock/useDomain";
import useCart from "../../Hock/useCart";
import useAxiosPublic from "../../Hock/useAxiosPublic";
import Swal from "sweetalert2";
import { MdDelete } from "react-icons/md";

const SearchingDomain = () => {
    const searchValue = useSelector((state) => state.domain.domain)
    const [domain,] = useDomain();
    const [carts, loading, refetch] = useCart();
    const useAxios = useAxiosPublic();
    // console.log(domain);
    // console.log(carts);

    const [searchTerm, setSearchTerm] = useState(searchValue);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredDomains = domain?.filter((domain) => {
        // const matchesSearch = domain.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || domain.category === selectedCategory;
        return searchTerm && matchesCategory;
    });

    const addToCart = async (domainItem) => {
        // Check if the domain is already in the cart
        const isDomainInCart = carts.some((cartItem) => cartItem._id === domainItem._id);
        const domainName = searchTerm +  domainItem?.name
        // console.log(domain);
        if (!isDomainInCart) {
            const cartItem = {
                name: domainName,
                category: domainItem.category,
                price: domainItem.price,
                description: domainItem.description
            }
            const cartRes = await useAxios.post('/carts', cartItem)
            if (cartRes.data.acknowledged) {
                Swal.fire({
                    title: 'success!',
                    text: 'Domain Added Cart',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                refetch()

            }




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
                        text:  " Item has been deleted",
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div className=" container mx-auto dark:text-white">
            <div className="mb-4 flex flex-col md:flex-row justify-center items-center pt-36 pb-20 dark:text-black">
                <input
                    type="text"
                    placeholder="search here"
                    className=" border md:w-full border-gray-300 rounded-lg mr-1 p-2 "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="md:p-2 border border-gray-300 rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="education">Education</option>
                    <option value="commerce">Commerce</option>
                    <option value="health">health</option>
                    <option value="sport">Sport</option>
                    <option value="industry">Industry</option>
                    <option value="government">Government</option>
                    {/* Add more categories as needed */}
                </select>
            </div>

            <div className="flex gap-5">
                <div className="flex flex-col gap-4 w-full md:w-[60%]">
                    {filteredDomains.length > 0 ? (
                        // Your content when filteredDomains has items
                        <p className="text-2xl md:text-3xl font-bold text-center"> Available This Domain</p>
                    ) : (
                        // Your placeholder or fallback content
                        <p className="text-2xl md:text-3x font-bold text-center">Not available This Domain</p>
                    )}
                    {filteredDomains.map((domainItem) => (
                        <div key={domainItem.id} className="relative flex justify-center w-full flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-[#23668a] bg-clip-border p-2 text-white shadow-md shadow-gray-500">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">{searchTerm} {domainItem.name}</h3>
                                {/* <p className="text-gray-100">{domain.category}</p> */}
                                <div className="flex justify-center items-center gap-5">
                                    <p className="text-gray-100">price: 10$</p>
                                    <div className="border-2 p-2 rounded-lg">
                                        {/* Cart icon */}
                                        <MdAddShoppingCart className="  text-2xl cursor-pointer" onClick={() => addToCart(domainItem)} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>


            
                <div className=" hidden md:block  mt-10 border-2  border-cyan-600 rounded-lg p-2 w-[40%]">
                    <div>
                        <h2 className="text-xl flex justify-center font-semibold mb-4 ">MY Cart</h2>
                        {carts.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div>

                                {carts.map((cartItem) => (

                                    <div className="flex  justify-between gap-5" key={cartItem.id}>
                                        <p >{cartItem.name}</p>
                                        <div className="flex gap-2">
                                            <p >price:{cartItem.price}$</p>
                                            <MdDelete  onClick={() => handleDeleteItem(cartItem)} className="text-red-500" />

                                        </div>

                                    </div>


                                ))}

                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};
export default SearchingDomain;