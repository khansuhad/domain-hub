import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import image from "../../../assets/WhyDomainHub/output-onlinegiftools.gif"

const WhyDomainHub = () => {
    return (
        <>
            <section className="">

                <div>
                    <Container>

                        <Heading>
                            Why DomainHub
                        </Heading>

                        <Description>
                            Explore Our Motive
                        </Description>

                    </Container>
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-center">
                    <div>
                        <img src={image} alt="DomainHub.gif" />
                    </div>

                    <div className="">
                        <div className=" space-y-10">
                            <p className="text-gray-600 lg:text-xl leading-relaxed mx-auto ">
                                1.Discover premium domains with ease on DomainHub.
                            </p>
                            <p className="text-gray-600 lg:text-xl leading-relaxed mx-auto ">
                                2.Our user-friendly platform simplifies the buying and selling process.
                            </p>
                            <p className="text-gray-600 lg:text-xl leading-relaxed mx-auto ">
                                3. providing a secure and transparent experience.
                            </p>
                            <p className="text-gray-600 lg:text-xl leading-relaxed mx-auto">
                                4.Benefit from expert guidance, a diverse domain portfolio, and a global community.
                            </p>

                        </div>
                    </div>
                </div>
                <h1 className="text-2xl border border-yellow-500 rounded-full bg-yellow-500 w-[800px] mx-auto p-2"> Join us and unlock the potential of your online presence today.</h1>
            </section>


        </>
    );
};

export default WhyDomainHub;