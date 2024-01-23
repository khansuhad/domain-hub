import { useState } from "react";
import { useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";

const SearchingDomain = () => {
    const searchValue = useSelector((state) => state.domain.domain)

    // Sample domain data
    const domainData = [
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'Digonto.com', category: 'Technology', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example2.net', category: 'Business', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example1.com', category: 'Technology', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        { name: 'example3.org', category: 'Health', price: "10" },
        // Add more domain data as needed
    ];


    const [searchTerm, setSearchTerm] = useState(searchValue);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [cart, setCart] = useState([]);

    const filteredDomains = domainData.filter((domain) => {
        const matchesSearch = domain.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || domain.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const addToCart = (domain) => {
        // Check if the domain is already in the cart
        const isDomainInCart = cart.some((cartItem) => cartItem.id === domain.id);

        if (!isDomainInCart) {
            setCart([...cart, domain]);
        }
    };

    return (
        <div className=" container mx-auto dark:text-white">
            <div className="mb-4 flex flex-col md:flex-row justify-center items-center pt-36 pb-20 ">
                <input
                    type="text"
                    placeholder="search here"
                    className=" border md:w-full border-gray-300 rounded-lg mr-4 p-2 md:p-5"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="md:p-2 border border-gray-300 rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Health">Health</option>
                    {/* Add more categories as needed */}
                </select>
            </div>

            <div className="flex gap-5">
                <div className="flex flex-col gap-4 w-full md:w-4/6">
                    {filteredDomains.length > 0 ? (
                        // Your content when filteredDomains has items
                        <p className="text-2xl md:text-3xl font-bold text-center"> Available This Domain</p>
                    ) : (
                        // Your placeholder or fallback content
                        <p className="text-2xl md:text-3x font-bold text-center">Not available This Domain</p>
                    )}
                    {filteredDomains.map((domain) => (
                        <div key={domain.id} className="relative flex justify-center w-full flex-col rounded-xl bg-gradient-to-tr from-teal-600 to-[#23668a] bg-clip-border p-2 text-white shadow-md shadow-gray-500">
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">{domain.name}</h3>
                                {/* <p className="text-gray-100">{domain.category}</p> */}
                                <div className="flex justify-center items-center gap-5">
                                    <p className="text-gray-100">price: 10$</p>
                                    <div className="border-2 p-2 rounded-lg">
                                        {/* Cart icon */}
                                        <MdAddShoppingCart className="  text-2xl cursor-pointer" onClick={() => addToCart(domain)} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>


                <div className=" hidden md:block max-w-lg mt-10 border-2  border-cyan-600 rounded-lg p-2 w-2/6">
                    <div>
                        <h2 className="text-xl flex justify-center font-semibold mb-4 ">MY Cart</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            <div>

                                {cart.map((cartItem) => (


                                    <div className="flex  justify-between gap-5" key={cartItem.id}>
                                        <p >{cartItem.name}</p>
                                        <p >price:{cartItem.price} $</p>
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