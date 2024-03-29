import Banner from "./Banner/Banner";
import BestHostingPlan from "./BestHostingPlan/BestHostingPlan";
import FAQ from "./FAQ/FAQ";
import FreeTrial from "./FreeTrial/FreeTrial";
import OffersAndDiscounts from "./OffersAndDiscounts/OffersAndDiscounts";
import SuccessShowcase from "./SuccessShowcase/SuccessShowcase";
import DomainTld from "../../Component/Shared/DomainTld/DomainTld";
import Review from "./Review/Review";
import XYZDomainAdvantage from "../../Component/Shared/XYZDomainAdvantage/XYZDomainAdvantage";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="bg-firstColor dark:bg-[#191919]">
      <Helmet>
        <title>DomainHub | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Banner />
      <DomainTld></DomainTld>
      <FreeTrial />
      <BestHostingPlan />
      <FAQ />
      <XYZDomainAdvantage />
      <SuccessShowcase />
      <Review />
      {/* <Tutorial/> */}
      <OffersAndDiscounts />
    </div>
  );
};

export default Home;
