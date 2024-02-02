
import AboutUs from "./AboutUs/AboutUs";
import OurMission from "./OurMission/OurMission";
import OurTeam from "./OurTeam/OurTeam";
import WhyDomainHub from "./WhyDomainHub/WhyDomainHub";

const About = () => {
    return (
        <>
            <div className="dark:bg-[#191919]">
                
                    <AboutUs></AboutUs>
                
                    <OurMission></OurMission>
             
                    <WhyDomainHub></WhyDomainHub>
               
                    <OurTeam></OurTeam>
               
            </div>
        </>
    );
};

export default About;