import { useTranslation } from "react-i18next";
import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import image from "../../../assets/WhyDomainHub/output-onlinegiftools.gif"

const WhyDomainHub = () => {
    const { t } = useTranslation()
    return (
        <>
            <section className="bg-firstColor dark:bg-[#191919] pt-10 ">

                <div>
                    <Container>

                        <Heading>
                           {t("whyUs")}
                        </Heading>

                        <Description>
                            {t("whyDes")}
                        </Description>

                    </Container>
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-center w-[95%] mx-auto">
                    <div>
                        <img src={image} alt="DomainHub.gif" />
                    </div>

                    <div className="">
                        <div className=" space-y-10 ">
                            <p className="text-white dark:text-white lg:text-xl leading-relaxed mx-auto ">
                               {t("why1")}
                            </p>
                            <p className="text-white dark:text-white lg:text-xl leading-relaxed mx-auto ">
                               {t("why2")}
                            </p>
                            <p className="text-white dark:text-white lg:text-xl leading-relaxed mx-auto ">
                                {t("why3")}
                            </p>
                            <p className="text-white dark:text-white lg:text-xl leading-relaxed mx-auto">
                                {t("why4")}
                            </p>

                        </div>
                    </div>
                </div>

                <h1 className="lg:text-2xl w-[95%] mx-auto text-sm border mt-10 border-yellow-500 rounded-full bg-yellow-500 lg:w-[700px]  p-2">{t("joinUs")}</h1>

            </section>


        </>
    );
};

export default WhyDomainHub;