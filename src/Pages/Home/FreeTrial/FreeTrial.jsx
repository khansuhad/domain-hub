import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import image from "../../../assets/FreeTrialSectionImages/Domain-free-trial.png"
import UseAuth from "../../../Hock/UseAuth";

import { Link } from "react-router-dom";
import swal from "sweetalert";
import useDomain from "../../../Hock/useDomain";
import useAxiosPublic from "../../../Hock/useAxiosPublic";

const FreeTrial = () => {
    const { user } = UseAuth();
    console.log("FreeTrial", user);

    const [domain] = useDomain();
    console.log(domain);
    const axiosPublic = useAxiosPublic();
    const handleFreeTrialApplication = (e) => {
        e.preventDefault();
        const form = e.target

        const domainName = form.Domain.value


        console.log("Domain:", domainName);

        const FreeTrialApplyData = {
            email: user.email,
            userName: user.displayName,
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
                <Heading>Freetrial</Heading>
                <Description>Enjoy a free domain on us! Simply apply by sending us your favorite domain name, and we'll take care of the rest. Secure your online presence with a personalized domain that reflects your identity. Don't miss out on this opportunity to enhance your web presence. </Description>
            </Container>

            {/* Free Trial Section Start */}

            <section className="flex lg:flex-row flex-col items-center justify-between  rounded-md dark:bg-[#191919] lg:px-[15%]  lg:h-[600px]">



                <div className="lg:w-[750px] space-y-10" >
                    <img src={image} alt="" />
                </div>


                <div className=" h-screen flex items-center justify-center text-white">

                    <div className="max-w-md p-8 dark:bg-gray-700 bg-fourthColor shadow-md rounded-md">


                        <h1 className="lg:text-4xl text-3xl font-bold  mb-6">Free Trial Application</h1>


                        <form onSubmit={handleFreeTrialApplication} className="mb-4 ">


                            <div>
                                <select required name="Domain" defaultValue="" className="select p-0 pl-2 appearance-none w-full border-none outline-none text-black text-sm font-semibold">
                                    <option disabled value="">Select Domain</option>
                                    {
                                        domain?.map(dom => <option key={dom._id} value={dom.name}>{dom.name}</option>)
                                    }
                                    <option disabled value="">Select Domain</option>


                                </select>
                            </div>

                            <p className="text-white pt-2 dark:text-white mb-4 text-[12px] font-thin ">
                                Sign up for 7 days a free trial and explore our amazing features! We understand the importance of finding the perfect domain to elevate your online presence.
                            </p>

                            {
                                user ? (
                                    <button type="submit" className="bg-secondColor btn border-none text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                        Free Trial Application
                                    </button>
                                ) : (
                                    <Link to="/registration">
                                        <h1 className="bg-blue-500 btn text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                                            First registration
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