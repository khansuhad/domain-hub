import Banner from "./Banner/Banner";
import BestHostingPlan from "./BestHostingPlan/BestHostingPlan";
import FAQ from "./FAQ/FAQ";
import FreeTrial from "./FreeTrial/FreeTrial";
import OffersAndDiscounts from "./OffersAndDiscounts/OffersAndDiscounts";
import PriceByCategory from "./PriceByCategory/PriceByCategory";
import SuccessShowcase from "./SuccessShowcase/SuccessShowcase";
import Tutorial from "./Tutorial/Tutorial";

const Home = () => {
    return (
        <div>
            <Banner/>
            <BestHostingPlan/>
            <FAQ/>
            <SuccessShowcase/>
            <FreeTrial/>
            <PriceByCategory/>
            <Tutorial/>
            <OffersAndDiscounts/>
        </div>
    );
};


export default Home;