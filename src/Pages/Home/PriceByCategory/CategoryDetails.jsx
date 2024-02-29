import { useSelector } from "react-redux";
import img from "../../../assets/bannerImg/domain_pix.png";
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useCart from "../../../Hock/useCart";
import useAllSoldDomain from "../../../Hock/useAllSoldDomain";
import { useTranslation } from "react-i18next";
import { IoDiamond } from "react-icons/io5";
import UseAuth from "../../../Hock/UseAuth";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
const CategoryDetails = () => {
  const { t } = useTranslation();
  const [searchedDomain, setSearchedDomain] = useState("");
  const [notAvailable, setNotAvailable] = useState("");
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.currentUser);
  const domainDetails = useSelector((state) => state.domain.domain);
  console.log(domainDetails.approve);
  const axiosSecure = useAxiosPublic();
  const [carts, loading, refetch] = useCart();
  const [alldomain] = useAllSoldDomain();
  console.log("cart item:", alldomain);
  const bookedDomains = alldomain?.filter((item) => item.payment === "true");
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchData = form.domain.value;
    const domainSearched = searchData.concat(domainDetails?.name);
    const domain = domainSearched.toLowerCase();
    console.log("lowercase domain", domain);
    const findDomain = bookedDomains.filter((item) => item.name === domain);
    console.log("test status", findDomain?.length);
    if (findDomain?.length > 0) {
      setNotAvailable("Sorry! this domain is already taken.");
      setSearchedDomain("");
    } else {
      setSearchedDomain(domain);
      setNotAvailable("");
    }
  };
  console.log("domain searched", searchedDomain);
  const cartItem = {
    name: searchedDomain,
    category: domainDetails?.category,
    price: domainDetails?.price,
    description: domainDetails?.description,
    email: userInfo?.email,
    review: "false",
    payment: "false",
    domainId: domainDetails?._id,
  };
  const handleCart = () => {
    axiosSecure.post("/carts", cartItem).then((res) => {
      if (res.data.insertedId) {
        console.log(res.data);
        toast.success("Successfully Added to Cart!");
        refetch();
        navigate("/dashboard/myCart");
      }
    });
  };

  const { user } = UseAuth();

  const handleClaimDomain = () => {
    const updateData = {
      claimDomain: searchedDomain,
      email: user?.email,
    };
    axiosSecure
      .patch("/freeTrialUsers", updateData)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          swal("Congratulation", "You Got Your domain", "success");
          navigate("/dashboard/my-free-tail-application");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Helmet>
        <title>DomainHub | Category Details</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="bg-firstColor ">
        <div className="w-[95%] lg:w-[90%] mx-auto dark:text-white pt-32 ">
          <div className="flex flex-col md:flex-row justify-around items-center pt-24 pb-16  dark:text-black bg-fourthColor rounded-xl">
            <div className="space-y-5 pl-5">
              <p className="text-xl font-semibold text-white">
                {" "}
                <span className="bg-blue-700 text-white p-1 rounded ">
                  {domainDetails?.name}
                </span>{" "}
                Domain Names
              </p>
              <p className="text-4xl font-bold text-white">
                {domainDetails?.description}
              </p>
              <p className="text-xl font-semibold text-white">
                Available now! Starting at
              </p>
              <p className="text-4xl font-semibold bg-blue-700 text-white p-1 rounded w-fit">
                ${domainDetails?.price}/yr
              </p>
            </div>
            <div>
              <img src={img} alt="" />
            </div>
          </div>
          <div className="lg:mx-28 pt-5">
            <p className="lg:text-2xl text-center  my-3 font-bold text-white ">
              Start your {domainDetails?.name} domain search now.
            </p>
            <div>
              <form
                action=""
                onSubmit={handleSearch}
                className="flex justify-center gap-2"
              >
                <div className="relative w-full max-w-2xl">
                  <input
                    type="text"
                    name="domain"
                    placeholder={t("domainEnter")}
                    className="w-full text-black max-w-2xl p-3 rounded-lg outline-info border-2"
                  />
                  <p className="p-3 bg-blue-700 text-white absolute right-0 top-0 rounded-r-lg border-slate-700 border-2">
                    {domainDetails?.name}
                  </p>
                </div>

                <button
                  type="submit"
                  className="block select-none rounded-lg bg-secondColor hover:bg-thirdColor border-b-2 py-2 px-4 text-center align-middle font-sans text-sm font-semibold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  {t("bannerSearchBtn")}
                </button>
              </form>
              <div>
                {searchedDomain?.length > 0 ? (
                  <div className="text-white py-5">
                    <p className="text-center py-4 text-xl font-semibold">
                      {t("domainAvailable")}
                    </p>
                    <div className="relative flex justify-center w-full flex-col rounded-xl bg-fourthColor border-2 bg-clip-border p-2 text-white ">
                      <div className="flex justify-between">
                        <>
                          <p>{searchedDomain}</p>
                          {domainDetails.approve ? (
                            <div
                              onClick={handleClaimDomain}
                              className="flex gap-1 cursor-pointer"
                            >
                              {" "}
                              <span>Claim</span>{" "}
                              <IoDiamond className="  text-2xl " />
                            </div>
                          ) : (
                            <div
                              className="flex gap-1 cursor-pointer"
                              onClick={handleCart}
                            >
                              {" "}
                              <span>{t("addToCart")} </span>{" "}
                              <MdAddShoppingCart className="text-2xl " />
                            </div>
                          )}
                        </>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-xl text-center pt-5 font-semibold text-red-600">
                      {notAvailable}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetails;
