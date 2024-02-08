import { Link } from "react-router-dom";
import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import { useTranslation } from "react-i18next";

const BestHostingPlan = () => {
    const { t } = useTranslation()
    return (
        <Container>
            <div className="bg-firstColor p-3 dark:bg-[#191919] dark:text-white">
                <Heading>{t("planHeader")}</Heading>
                <Description>{t("planDes")} <br />{t("planDes2")}</Description>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 px-[10%]">
                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="relative flex w-full flex-col rounded-xl bg-[#202A7C] bg-clip-border p-8 text-white shadow-md shadow-black">
                          
                        <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                {t("plan1")}
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-xl"></span><span className="mt-2 text-4xl">$</span>10
                                <span className="self-end text-xl">/1 month</span>
                            </h1>
                        </div>

                        <div className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        use any Domain
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        cancel anytime
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        50GB Brandwidth
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        10 Free Sub-Domains
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Life time technical support
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12">
                            <button
                                className="block w-full select-none rounded-lg bg-secondColor hover:bg-thirdColor border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                {t("plan1Btn")}
                            </button>
                        </div>
                    </div>

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="relative flex w-full flex-col rounded-xl bg-[#202A7C] bg-clip-border p-8 text-white shadow-md shadow-black">
                        <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                {t("plan2")}
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-4xl">$</span>15
                                <span className="self-end text-xl">/1 month</span>
                            </h1>
                        </div>
                        <div className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        use any Domain
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        cancel anytime
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        100GB Brandwidth
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        50 Free Sub-Domains
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Life time technical support
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12">

                            <Link to="/payment">
                                <button
                                    className="block w-full select-none rounded-lg  bg-secondColor hover:bg-thirdColor border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    {t("plan2Btn")}
                                </button>
                            </Link>

                        </div>
                    </div>

                    <div data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className="relative  flex w-full  flex-col rounded-xl bg-[#202A7C] bg-clip-border p-8 text-white shadow-md shadow-black">
                        <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                                {t("plan3")}
                            </p>
                            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                                <span className="mt-2 text-4xl">$</span>20
                                <span className="self-end text-xl">/1 month</span>
                            </h1>
                        </div>
                        <div className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        use any Domain
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        cancel anytime
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        50GB Brandwidth
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        50 Free Sub-Domains
                                    </p>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                            className="w-3 h-3"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12.75l6 6 9-13.5"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        Life time technical support
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="p-0 mt-12">
                            <Link to='/payment'>
                                <button
                                    className="block w-full select-none rounded-lg  bg-secondColor hover:bg-thirdColor border-b-2 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    {t("plan3Btn")}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BestHostingPlan;