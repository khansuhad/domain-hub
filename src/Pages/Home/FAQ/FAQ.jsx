import { useState } from "react";
import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import { IoIosArrowDown,IoIosArrowUp  } from "react-icons/io";
import Heading from "../../../Component/UI/Heading";
import Faq from "../../../../public/faq.json"
import Lottie from 'lottie-react';
import { useTranslation } from "react-i18next";


const FAQ = () => {
    const {t}=useTranslation()

    const faqData = [
        {
            question: t("Faq1Q"),
            answer:  t("Faq1A"),
        },
        {
            question: t("Faq2Q"),
            answer: t("Faq2A") ,
        },
        {
            question: t("Faq3Q"),
            answer:  t("Faq3A"),
        },
        {
            question: t("Faq4Q") ,
            answer: t("Faq4A"),
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
               <Heading>{t("FaqTitle")}</Heading>

                {/* section subHeading */}
                <Description>{t("FaqDes")}</Description>


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