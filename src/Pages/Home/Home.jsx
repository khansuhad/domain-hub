import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import BestHostingPlan from "./BestHostingPlan/BestHostingPlan";
import FAQ from "./FAQ/FAQ";
import FreeTrial from "./FreeTrial/FreeTrial";
import OffersAndDiscounts from "./OffersAndDiscounts/OffersAndDiscounts";
import PriceByCategory from "./PriceByCategory/PriceByCategory";
import SuccessShowcase from "./SuccessShowcase/SuccessShowcase";
import DomainTld from "../../Component/Shared/DomainTld/DomainTld";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="bg-firstColor dark:bg-[#191919]">
      <Banner />
      <DomainTld></DomainTld>
      <FreeTrial />
      <BestHostingPlan />
      <FAQ />
      <SuccessShowcase />
      <PriceByCategory data={data} />
      {/* <Tutorial/> */}
      <OffersAndDiscounts />
    </div>
  );
};

export default Home;
