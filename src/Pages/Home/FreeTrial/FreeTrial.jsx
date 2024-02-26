import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import image from "../../../assets/FreeTrialSectionImages/Domain-free-trial.png"
import UseAuth from "../../../Hock/UseAuth";

import { Link } from "react-router-dom";
import swal from "sweetalert";
import useDomain from "../../../Hock/useDomain";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import { useTranslation } from "react-i18next";

const FreeTrial = () => {
    const { user } = UseAuth();
    const { t } = useTranslation()

    const [domain] = useDomain();
    console.log(domain);
    const axiosPublic = useAxiosPublic();
    const handleFreeTrialApplication = (e) => {
        e.preventDefault();
        const form = e.target

        const domainName = form.Domain.value


        console.log("Domain:", domainName);

        const FreeTrialApplyData = {
            email: user?.email,
            userName: user?.displayName,
            domainName,
            approve: "Pending",

        }

        axiosPublic.post("/freeTrialUsers", FreeTrialApplyData)
            .then(res => {
                console.log("Response:", res.data);
                if (res.data.insertedId) {
                    swal("Application Sent", "We contact with you very soon!", "success");
                } else {
                    swal("Your already Sent", "We contact with you very soon!", "warning");
                }

                form.reset();
            })
            .catch(err => {
                console.log("Error:", err);
            })
    };

    return (

        <>
            <Container>
                <Heading>{t("trialTitle")}</Heading>
                <Description>{t("trialTitlesDes")} </Description>
            </Container>

            {/* Free Trial Section Start */}

            <section  className="flex lg:flex-row flex-col items-center justify-between  rounded-md dark:bg-[#191919] lg:px-[15%]  lg:h-[600px]">
                <div className="lg:w-[750px] space-y-10 delay-200"  data-aos="zoom-in-right"  >
                    <img src={image} alt="" />
                </div>
                
                <div className=" h-screen flex items-center justify-center text-white">

                    <div className="max-w-md p-8 dark:bg-gray-700 bg-fourthColor shadow-md rounded-md delay-200" data-aos="zoom-in-left" >

                        <h1 className="lg:text-4xl text-3xl font-bold  mb-6">{t("trialSectionTitle")}</h1>

                        <form onSubmit={handleFreeTrialApplication} className="mb-4 ">

                            <div>
                                <select required name="Domain" defaultValue="" className="select p-0 pl-2 appearance-none w-full border-none outline-none text-black text-sm font-semibold">
                                    <option disabled value="">{t("trialSelect")}</option>
                                    {
                                        domain?.map(dom => <option className="bg-thirdColor dark:bg-slate-700 dark:text-white  text-black font-semibold" key={dom._id} value={dom.name}>{dom.name}</option>)
                                    }
                                    <option disabled value="">{t("trialSelect")}</option>


                                </select>
                            </div>

                            <p className="text-white pt-2 dark:text-white mb-4 text-[12px] font-thin ">
                                {t("trialDes")}
                            </p>

                            {
                                user ? (
                                    <button type="submit" className="bg-secondColor btn border-none text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                        {t("trialSectionTitle")}
                                    </button>
                                ) : (
                                    <Link to="/registration">
                                        <h1 className="bg-blue-500 btn text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                            {t("trialSectionTitle")}
                                        </h1>
                                    </Link>
                                )
                            }
                        </form>
                    </div>

                </div>

            </section>

            {/* Free Trial Section Finish */}


        </>
    );
};

export default FreeTrial;