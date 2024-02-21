
import { useTranslation } from 'react-i18next';
import Description from '../../../Component/UI/Description';
import Heading from '../../../Component/UI/Heading';

const AboutUs = () => {
    const { t } = useTranslation()
    return (
        <>
            {/* About Us Section start */}
            <section className='w-[95%] mx-auto'>

                <div className='py-20 '>


                    <Heading>
                        {t("navAbout")}
                    </Heading>

                    <Description>
                        {t("aboutDes")}
                    </Description>


                </div>

                <div className='lg:w-9/12 mx-auto lg:border-white text-white dark:bg-[#191919] dark:text-white dark:border-white'>
                    <h1 className='lg:text-2xl text-sm px-5 lg:px-20 font-normal bg-fourthColor border-2 p-8 lg:rounded-s-full lg:rounded-e-full' style={{ background: 'linear-gradient(to right, #ac50ef, #7059fb, #23668a)' }}>
                        {t("aboutH1")}
                    </h1>
                </div>

            </section>

            {/* About Us Section finish */}
        </>
    );
};

export default AboutUs;