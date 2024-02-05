
import Description from '../../../Component/UI/Description';
import Heading from '../../../Component/UI/Heading';

const AboutUs = () => {
    return (
        <>
            {/* About Us Section start */}
            <section className='w-[95%] mx-auto'>

                <div className='py-20 '>
                    

                        <Heading>
                            About Us
                        </Heading>

                        <Description>
                            Explore Our Website
                        </Description>

                  
                </div>

                <div className='lg:w-9/12 mx-auto  lg:border-white  text-white   dark:bg-[#191919] dark:text-white dark:border-white'>
                    <h1 className='lg:text-2xl text-sm px-5 lg:px-20 font-normal bg-fourthColor border-2  p-8 lg:rounded-s-full lg:rounded-e-full'>
                        Welcome to DomainHub – Your Premier Destination for Domain Buying and Selling!At DomainHub, we are passionate about connecting individuals, businesses, and visionaries with the perfect domain names to elevate their online presence. As a leading domain selling platform, we offer a seamless and secure marketplace where buyers and sellers come together to explore a world of possibilities.
                    </h1>
                </div>

            </section>

            {/* About Us Section finish */}
        </>
    );
};

export default AboutUs;