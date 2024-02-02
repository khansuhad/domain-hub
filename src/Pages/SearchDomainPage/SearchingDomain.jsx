import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import useDomain from "../../Hock/useDomain";
import useCart from "../../Hock/useCart";
import useAxiosPublic from "../../Hock/useAxiosPublic";
import Swal from "sweetalert2";


const SearchingDomain = () => {
    const searchValue = useSelector((state) => state.domain.domain)
    const userInfo = useSelector((state) => state.user.currentUser);
    console.log(userInfo.email);
    const [domain,] = useDomain();
    const [carts, loading, refetch] = useCart();
    const useAxios = useAxiosPublic();
    console.log(domain);
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
        const isDomainInCart = carts?.some((cartItem) => cartItem._id === domainItem._id);
        const domainName = searchTerm.concat(domainItem?.name)
        // console.log(domain);
        // jhdcbjhd
        if (!isDomainInCart) {
            const cartItem = {
                name: domainName,
                category: domainItem?.category,
                price: domainItem?.price,
                description: domainItem?.description,
                email: userInfo?.email,
                review: "false",
                payment:"false"
             
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
    

    return (
        <div  className="  py-10  bg-firstColor dark:text-white px-[10%] px-auto">
            <div className="mb-4  flex flex-col md:flex-row justify-center items-center pt-36 pb-20 dark:text-black">
                <input
                    type="text"
                    placeholder="search here"
                    className=" border md:w-full m-2 border-gray-300 rounded-lg mr-1 p-2 "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="md:p-2 mr-2 border border-gray-300 rounded-lg"
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
                <div className="flex flex-col gap-4 w-full p-2">
                    {filteredDomains.length > 0 ? (
                        // Your content when filteredDomains has items
                        <p className="text-2xl md:text-3xl font-bold text-center text-white"> Available This Domain</p>
                    ) : (
                        // Your placeholder or fallback content
                        <p className="text-2xl md:text-3x font-bold text-center text-white">Not available This Domain</p>
                    )}
                           <div  className="grid grid-cols-1 md:grid-cols-2 gap-5 ">  
                    {filteredDomains.map((domainItem) => (
               <div  key={domainItem?.id} className="relative flex justify-center w-full flex-col rounded-xl bg-fourthColor border-2 bg-clip-border p-2 text-white ">
                   <div className="flex justify-between items-center">
                       <h3 className="text-lg font-semibold">{searchTerm} {domainItem?.name}</h3>
                       {/* <p className="text-gray-100">{domain.category}</p> */}
                       <div className="flex justify-center items-center gap-5">
                           <p className="text-gray-100">price: {domainItem.price}</p>
                           <div className="border-2 p-2 bg-secondColor hover:bg-thirdColor rounded-lg">
                               {/* Cart icon */}
                               <MdAddShoppingCart className="  text-2xl cursor-pointer " onClick={() => addToCart(domainItem)} />
                           </div>
                       </div>

                   </div>

               </div>
                    ))}
                    </div>
                </div>

                

            </div>
        </div>
    );
};
export default SearchingDomain;