import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import Description from "../../../Component/UI/Description";
import image from "../../../assets/FreeTrialSectionImages/Domain-free-trial.png"
import { MdEmail } from "react-icons/md";

const FreeTrial = () => {
    return (

        <>
            <Container>
                <Heading>Freetrial</Heading>
                <Description>description</Description>
            </Container>

            {/* Free Trial Section Start */}

            <section className="flex lg:flex-row flex-col items-center justify-between lg:bg-slate-100 rounded-md dark:bg-black lg:px-[15%]  lg:h-[600px]">



                <div className="lg:w-[750px] space-y-10" >
                    <img src={image} alt="" />
                </div>


                <div className=" h-screen flex items-center justify-center">

                    <div className="max-w-md p-8 dark:bg-[#191919] bg-white shadow-md rounded-md">

                        <h1 className="lg:text-4xl text-3xl font-bold text-blue-500 mb-6">Free Trial Application</h1>

                        <form className="mb-4 ">
                            <label className=" text-gray-700 dark:text-white text-sm font-semibold mb-2 flex items-center gap-1"><MdEmail></MdEmail>Email Address</label>
                            
                            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
                          <hr className="my-5" />
                            
                            <select name="Domain" className="select p-0 appearance-none w-full border-none outline-none text-black text-sm font-semibold">
                                <option disabled selected>Select Domain</option>
                                <option value="com">com</option>
                                <option value="info">info</option>
                                <option value="net">net</option>
                            </select>

                        </form>

                        <p className="text-gray-700 dark:text-white mb-4 text-[12px] font-thin ">
                            Sign up for 7 days a free trial and explore our amazing features! We understand the importance of finding the perfect domain to elevate your online presence.
                        </p>

                        <button type="submit" className="bg-blue-500 btn text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                            Apply for Free Trial
                        </button>

                    </div>

                </div>

            </section>

            {/* Free Trial Section Finish */}


        </>
    );
};

export default FreeTrial;