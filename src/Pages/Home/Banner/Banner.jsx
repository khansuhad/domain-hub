import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addDomain } from "../../../features/domain/domainSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Banner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const language = useSelector((state) => state.language)
    const backgroundPhoto = {
        backgroundImage: `url("https://i.postimg.cc/VN0ZFykB/how-to-choose-the-right-domain-name-1.png")`,
        height: "80vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

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
        const domainSearched = domain.toLowerCase()
        // data store 
        dispatch(addDomain(domainSearched))
        console.log("inputted domain is", domain);
        navigate("/searchPage")
    };

    return (
        <div style={backgroundPhoto} className="text-white bg-opacity-60 ">
            <div className="flex justify-center items-center h-full">
                <div>
                    <h2 className="lg:text-5xl md:text-4xl text-xl text-center font-bold md:mb-5 mb-2">{t('bannerTitle')}</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <div className="flex gap-2 justify-center  md:mt-5 mt-2 px-2 lg:px-0">
                                <div>
                                    <input
                                        {...register("domain", {
                                            required: "Domain name is required",
                                        })}
                                        type="text"
                                        placeholder={t("bannerSearchPlaceHolder")}
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
                                        <div className="flex items-center gap-2">
                                            <FaSearch className="lg:text-xl text-white dark:text-[#F5F7F8]"></FaSearch>
                                            <p className="text-lg text-white dark:text-[#F5F7F8]">{t("bannerSearchBtn")}</p>
                                        </div>
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