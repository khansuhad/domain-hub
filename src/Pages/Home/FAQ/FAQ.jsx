import { useState } from "react";
import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import Heading from "../../../Component/UI/Heading";
import Faq from "../../../../public/faq.json"
import Lottie from 'lottie-react';


const FAQ = () => {

    const faqData = [
        {
            question: ' What is domain hosting?',
            answer: 'Domain hosting refers to the service of storing and managing website files and data on a server connected to the internet. It allows your website to be accessible to users worldwide.',
        },
        {
            question: '  How do I choose the right domain name for my website?',
            answer: 'We provide a domain name search tool to help you find and register an available domain. Consider a name that reflects your brand, is easy to remember, and relevant to your content.',
        },
        {
            question: '  What types of hosting plans do you offer?',
            answer: 'We offer a range of hosting plans, including shared hosting, VPS hosting, and dedicated hosting. Each plan caters to different needs, from personal blogs to large business websites.',
        },
        {
            question: 'Do you provide customer support, and how can I reach you?',
            answer: 'Yes, we offer 24/7 customer support through various channels, including live chat, email, and phone. Our support team is ready to assist you with any questions or issues you may encounter.',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <Container>
            <div className="bg-firstColor p-2 dark:bg-[#191919] dark:text-white px-[10%]">
                {/* section Heading */}
               <Heading>Frequently Asked Questions</Heading>

                {/* section subHeading */}
                <Description>Find answers to common questions about choosing, registering, and managing your domain.</Description>


                <div className=" flex justify-between items-center ">
                    <div className="flex flex-col w-full md:flex-row justify-center items-center  dark:text-[#191919] dark:bg-[#191919]">
                        {/* FAQ image animation */}
                        <Lottie animationData={Faq}/>

                        <div className="container   mx-auto py-16">


                            <div className="grid gap-4">
                                {faqData.map((item, index) => (
                                    <div key={index} className="bg-white text-white rounded-md overflow-hidden shadow-md ">
                                        <div
                                            className={`p-6 cursor-pointer flex justify-between items-center  bg-gradient-to-tr from-[#ac50ef] via-[#7059fb] to-[#23668a]  ${activeIndex === index ? 'bg-clip-border p-8  shadow-md' : 'border-b border-black'
                                                }`}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className="text-lg font-semibold">{item.question}</span>
                                            <span className="text-xl">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="p-6">
                                                <p className="text-gray-700">{item.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </Container>
    );
};

export default FAQ;