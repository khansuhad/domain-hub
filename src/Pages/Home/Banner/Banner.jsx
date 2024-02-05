import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import banner from "../../../assets/bannerImg/domain-and.jpg";
import { useDispatch } from "react-redux";
import { addDomain } from "../../../features/domain/domainSlice";
import {useNavigate } from "react-router-dom";


const Banner = () => {
    const navigate =useNavigate();
    const dispatch = useDispatch()
    // const backgroundPhoto = {
    //     backgroundImage: `url("https://i.postimg.cc/VN0ZFykB/how-to-choose-the-right-domain-name-1.png")`,
    //     height: "80vh",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    // };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            domain: "",
        },
    });
    const onSubmit = (data) => {
        const domain = data.domain;
        const domainSearched= domain.toLowerCase()
        // data store 
        dispatch(addDomain(domainSearched))
        console.log("inputted domain is", domain);
        navigate("/searchPage")
    };

    return (
        <div  style={{backgroundImage: 'url(https://i.postimg.cc/VN0ZFykB/how-to-choose-the-right-domain-name-1.png)'}} className="text-white bg-opacity-60 hero min-h-screen">
            <div className="flex justify-center items-center h-full">
                <div>
                    <h2 className="lg:text-5xl md:text-4xl text-2xl font-bold md:mb-5 mb-2">Find Your Desired Domain Now!</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <div className="flex gap-2 justify-center  md:mt-5 mt-2">
                                <div>
                                    <input
                                        {...register("domain", {
                                            required: "Domain name is required",
                                        })}
                                        type="text"
                                        placeholder="Your Domain name"
                                        className="input input-info lg:w-[400px] md:w-[300px] w-full text-black dark:bg-gray-700 dark:text-white outline-none"
                                    />
                                    {errors.domain?.message && (
                                        <p className="text-xs text-red-600 mt-1">
                                            {errors.domain?.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <button className="btn bg-secondColor hover:bg-fourthColor dark:bg-gray-700 border-none  transition-all duration-300 " type="submit">
                                        <FaSearch className="text-xl text-white dark:text-[#F5F7F8]"></FaSearch>
                                        <p className="text-lg text-white dark:text-[#F5F7F8]">Search</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Banner;