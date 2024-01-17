import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";


const FAQ = () => {
    return (
        <Container>
            <div className="bg-firstColor p-2 dark:bg-[#191919] dark:text-white">
                {/* section Heading */}
                <p className="text-xl md:text-3xl lg:text-5xl font-bold text-center py-5"><span className="text-blue-500">F</span>requently <span className="text-blue-500">A</span>sked <span className="text-blue-500">Q</span>uestions </p>

                {/* section subHeading */}
                <Description>Find answers to common questions about choosing, registering, and managing your domain.</Description>


                <div className="flex flex-col md:flex-row justify-center items-center  dark:text-[#191919] dark:bg-[#191919]">
                    {/* FAQ image  */}
                    <img className=" w-[50%]" src="https://i.postimg.cc/SRKpQDZ1/FAQs-rafiki.png" alt="faq image" />

                    <div className=" my-5">

                        {/* 1st question and Answer */}
                        <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950">
                            <input type="radio" name="my-accordion-2" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                What is domain hosting?

                            </div>
                            <div className="collapse-content">
                                <p className="text-blue-700">Domain hosting refers to the service of storing and managing website files and data on a server connected to the internet. It allows your website to be accessible to users worldwide.</p>
                            </div>
                        </div>

                        {/* 2nd question and Answer */}
                        <div className="collapse collapse-arrow bg-base-200  dark:text-white dark:bg-slate-950">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                How do I choose the right domain name for my website?
                            </div>
                            <div className="collapse-content">
                                <p className="text-blue-700">We provide a domain name search tool to help you find and register an available domain. Consider a name that reflects your brand, is easy to remember, and relevant to your content.</p>
                            </div>
                        </div>

                        {/* 3rd question and Answer */}
                        <div className="collapse collapse-arrow bg-base-200  dark:text-white dark:bg-slate-950">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                What types of hosting plans do you offer?
                            </div>
                            <div className="collapse-content">
                                <p className="text-blue-700">We offer a range of hosting plans, including shared hosting, VPS hosting, and dedicated hosting. Each plan caters to different needs, from personal blogs to large business websites.</p>
                            </div>
                        </div>

                        {/* 4th question and Answer */}
                        <div className="collapse collapse-arrow bg-base-200  dark:text-white dark:bg-slate-950">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">
                                Do you provide customer support, and how can I reach you?
                            </div>
                            <div className="collapse-content">
                                <p className="text-blue-700">Yes, we offer 24/7 customer support through various channels, including live chat, email, and phone. Our support team is ready to assist you with any questions or issues you may encounter.</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </Container>
    );
};

export default FAQ;