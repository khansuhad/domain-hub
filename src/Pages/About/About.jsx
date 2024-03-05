import { Helmet } from "react-helmet";
import AboutUs from "./AboutUs/AboutUs";
import OurMission from "./OurMission/OurMission";
import OurTeam from "./OurTeam/OurTeam";
import WhyDomainHub from "./WhyDomainHub/WhyDomainHub";

const About = () => {
  return (
    <>
      <Helmet>
        <title>DomainHub | About</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="dark:bg-[#191919]">
        <div data-aos="zoom-in">
          <AboutUs></AboutUs>
        </div>

        <div data-aos="fade-up">
          <WhyDomainHub></WhyDomainHub>
        </div>

        <div data-aos="zoom-in">
          <OurMission></OurMission>
        </div>

        <div data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom">
          <OurTeam></OurTeam>
        </div>
      </div>
    </>
  );
};

export default About;
