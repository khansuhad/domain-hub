import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import useCart from "../../Hock/useCart";
import useAxiosPublic from "../../Hock/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hock/useAxiosSecure";
import Loading from "../../Component/Loading/Loading";
import { Helmet } from "react-helmet";
import useAllSoldDomain from "../../Hock/useAllSoldDomain";
import ContactSection from "../../Component/Shared/ContactSection/ContactSection";

const SearchingDomain = () => {
  const [alldomain] = useAllSoldDomain();
  const bookedDomains = alldomain
  // console.log(bookedDomains);

  
  const searchValue = useSelector((state) => state.domain.domain);
  const userInfo = useSelector((state) => state.user.currentUser);
  console.log(userInfo.email);
  const [carts, loading, refetch] = useCart();
  const useAxios = useAxiosPublic();
  console.log(carts);

  const [searchTerm, setSearchTerm] = useState(searchValue);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [info, setTeams] = useState([]);
  console.log(info);
  const [count, setCount] = useState(null);
  const [load, setLoad] = useState(true);
  const [countLoading, setCountLoading] = useState(true);
  const [itemPerPage, setItemPerPage] = useState(20);
  console.log(itemPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoad(true);
    axiosSecure.get("/domain-count").then((res) => {
      setCount(res.data.count);
      setCountLoading(false);
    });
    axiosSecure
      .get(`/domain?page=${currentPage}&size=${itemPerPage}`)
      .then((res) => {
        setTeams(res.data);
        setLoad(false);
      });
  }, [axiosSecure, currentPage, itemPerPage]);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);
  const handleItemParPageChange = (e) => {
    setItemPerPage(Number(e.target.value));
    setCurrentPage(0);
  };
  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredDomains = info?.filter((domain) => {
    // const matchesSearch = domain.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || domain.category === selectedCategory;
    return searchTerm && matchesCategory;
  });

  const addToCart = async (domainItem) => {
    refetch();
    const domainName = searchTerm.concat(domainItem?.name);
    console.log(domainName);
    // Check if the domain is already in the cart
    // const isDomainInCart = carts?.some(
    //   (cartItem) => cartItem.name === domainName
    // );

    // const isbookedDomains = bookedDomains?.some(
    //   (Item) => Item.name === domainName
    // );
  
    const findDomain = bookedDomains.filter((item) => item.name === domainName);
    const isDomainInCart = carts.filter((item) => item.name === domainName);

    console.log("isbookedDomains", findDomain?.length);
    console.log( "isDomainInCart", isDomainInCart?.length);
    if (findDomain?.length > 0 || isDomainInCart?.length > 0) {
      Swal.fire({
        title: "Wrong!",
        text: "Already taken this",
        icon: "error",
        confirmButtonText: "Close",
      });
      // swal("Oops!", "Already Added Cart!", "error");
    }
    else{
      const cartItem = {
        name: domainName,
        category: domainItem?.category,
        price: domainItem?.price,
        description: domainItem?.description,
        email: userInfo?.email,
        review: "false",
        payment: "false",
        domainId: domainItem?._id,
      };
      const cartRes = await useAxios.post("/carts", cartItem);
      if (cartRes.data.acknowledged) {
        Swal.fire({
          title: "success!",
          text: "Domain Added Cart",
          icon: "success",
          confirmButtonText: "Cool",
        });
        refetch();
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>DomainHub | Searching Domain</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {load || countLoading || loading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full pt-16 flex flex-col-reverse md:flex-row justify-between items-center bg-thirdColor">
            <div className=" mx-5 lg:px-[10%] flex-grow">
              <p className="text-sm lg:text-xl text-center md:text-left text-white">
                SEARCH AVAILABLE DOMAIN NAMES
              </p>

              <p className="text-4xl md:text-3xl lg:text-5xl text-center md:text-left text-white font-bold">
                Find your domain name
              </p>

              <p className="text-white text-sm lg:text-xl text-center md:text-left">
                Check if your domain’s available, browse alternatives, and land
                on one that’s perfect for your business, brand, or big idea.
              </p>

              <div className="mb-4  flex flex-col md:flex-row justify-center items-center lg:pt-5 dark:text-black">
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
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="All"
                  >
                    All Categories
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="technology"
                  >
                    Technology
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="education"
                  >
                    Education
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="commerce"
                  >
                    Commerce
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="health"
                  >
                    health
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="sport"
                  >
                    Sport
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="industry"
                  >
                    Industry
                  </option>
                  <option
                    className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold"
                    value="government"
                  >
                    Government
                  </option>
                  {/* Add more categories as needed */}
                </select>
              </div>
            </div>

            <div className="flex-grow">
              <img
                className="w-full h-full object-cover"
                src="https://i.postimg.cc/wBDkrpbZ/hero.png"
                alt=""
              />
            </div>
          </div>

          <div className="  py-10  bg-firstColor dark:bg-black dark:text-white lg:px-[10%] px-auto">
            <div className="flex gap-5">
              <div className="flex flex-col gap-4 w-full p-2">
                {filteredDomains.length > 0 ? (
                  // Your content when filteredDomains has items
                  <p className="text-2xl md:text-3xl font-bold text-center text-white">
                    Available This Domain
                  </p>
                ) : (
                  // Your placeholder or fallback content
                  <p className="text-2xl md:text-3x font-bold text-center text-white">
                    Not available This Domain
                  </p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                  {filteredDomains.map((domainItem) => (
                    <div
                      key={domainItem?.id}
                      className="relative flex justify-center w-full flex-col rounded-xl bg-fourthColor border-2 bg-clip-border p-2 text-white "
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold">
                          {searchTerm} {domainItem?.name}
                        </h3>
                        {/* <p className="text-gray-100">{domain.category}</p> */}
                        <div className="flex justify-center items-center gap-5">
                          <p className="text-gray-100">
                            price: {domainItem.price}
                          </p>
                          <div className="border-2 p-2 bg-secondColor hover:bg-thirdColor rounded-lg">
                            {/* Cart icon */}
                            <MdAddShoppingCart
                              className="  text-2xl cursor-pointer "
                              onClick={() => addToCart(domainItem)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* paigination add */}
          <div className="flex flex-wrap justify-center items-center gap-2 py-10 bg-firstColor dark:bg-black">
            <div
              onClick={handlePrevPage}
              className={`bg-thirdColor w-fit hover:bg-fourthColor text-white  flex justify-center items-center border-2 btn-sm rounded-sm`}
            >
              Prev
            </div>
            {pages?.map((page, i) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`${
                  currentPage === page
                    ? "bg-thirdColor w-fit hover:bg-fourthColor text-white border-2 btn-sm  rounded-sm"
                    : " w-fit bg-fourthColor hover:bg-thirdColor hover:text-firstColor text-white dark:text-white hover:dark:text-firstColor  btn-sm rounded-sm"
                }`}
              >
                {++i}
              </button>
            ))}
            <div
              onClick={handleNextPage}
              className={`bg-thirdColor w-fit hover:bg-fourthColor text-white  flex justify-center items-center border-2 btn-sm rounded-sm`}
            >
              Next
            </div>
            <select
              value={itemPerPage}
              onChange={handleItemParPageChange}
              className="select select-primary w-fit text-primary"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          <ContactSection></ContactSection>
        </div>
      )}
    </>
  );
};
export default SearchingDomain;
