import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import suhad from "../../../assets/OurTeam/suhad.jpg"
import monjur from "../../../assets/OurTeam/monjur-removebg-preview.png"
import abuBakar from "../../../assets/OurTeam/abu-bakar.jpg"
import fahim from "../../../assets/OurTeam/fahim.jpg"
import shariful from "../../../assets/OurTeam/shariful.jpg"
import digontha from "../../../assets/OurTeam/digontha.png"


const OurTeam = () => {
    return (
        <>
            {/* our team section start */}
            <section className="bg-firstColor py-10 text-white">

                <div>
                    <Container>

                        <Heading>
                            Our Team
                        </Heading>

                        <Description>
                            Explore Our Team
                        </Description>

                        <div className="grid h-fit dark:text-white grid-cols-2 md:grid-cols-3 text-center lg:grid-cols-6 w-9/12 mx-auto pt-10">

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={shariful} alt="" />
                                <p>MD Shariful Islam Bhuyan</p>
                            </div>

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={abuBakar} alt="" />
                                <p>Abu bakar</p>
                            </div>

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={fahim} alt="" />
                                <p> Fahim Mohammad Siam</p>
                            </div>

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={suhad} alt="" />
                                <p>suhad ahmod khan</p>
                            </div>

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={monjur} alt="" />
                                <p> Md Monjur Bakth Mazumder </p>
                            </div>

                            <div className="flex justify-center  flex-col gap-5">
                                <img className="rounded-full p-5" src={digontha} alt="" />
                                <p>Digontha Das</p>
                            </div>

                        </div>
                    </Container>
                </div>



            </section>
            {/* our team section finish */}
        </>
    );
};

export default OurTeam;