import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import BestHostingPlan from "./BestHostingPlan/BestHostingPlan";
import FAQ from "./FAQ/FAQ";
import FreeTrial from "./FreeTrial/FreeTrial";
import PriceByCategory from "./PriceByCategory/PriceByCategory";
import SuccessShowcase from "./SuccessShowcase/SuccessShowcase";
import Tutorial from "./Tutorial/Tutorial";

const Home = () => {
    const data= useLoaderData()
    return (
        <div className="bg-white text-green-600 dark:text-yellow-500 dark:bg-red-500">
            <Banner/>
            <BestHostingPlan/>
            <FAQ/>
            <SuccessShowcase/>
            <FreeTrial/>
            <PriceByCategory data={data}/>
            <Tutorial/>
        </div>
    );
};


export default Home;