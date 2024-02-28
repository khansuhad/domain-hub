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
        <AboutUs></AboutUs>

        <WhyDomainHub></WhyDomainHub>

        <OurMission></OurMission>

        <OurTeam></OurTeam>
      </div>
    </>
  );
};

export default About;
