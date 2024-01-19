
import AboutUs from "./AboutUs/AboutUs";
import OurMission from "./OurMission/OurMission";
import OurTeam from "./OurTeam/OurTeam";
import WhyDomainHub from "./WhyDomainHub/WhyDomainHub";

const About = () => {
    return (
        <>
            <div>
                <div>
                    <AboutUs></AboutUs>
                </div>

                <div>
                    <OurMission></OurMission>
                </div>
                <div>
                    <WhyDomainHub></WhyDomainHub>
                </div>
                <div>
                    <OurTeam></OurTeam>
                </div>
            </div>
        </>
    );
};

export default About;