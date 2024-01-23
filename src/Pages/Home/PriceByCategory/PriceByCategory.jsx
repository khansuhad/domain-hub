import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import { useEffect, useState } from "react";
import CategoryCards from "./CategoryCards";
import { CgMenuGridR } from "react-icons/cg";
import useDomain from "../../../Hock/useDomain";

const PriceByCategory = ({ data }) => {
    const [domain,loading,refetch]=useDomain()
    const [category, setCategory] = useState("education");
    const [categoryData, setCategoryData] = useState([]);
    const [showCategory, setShowCategory]= useState(false)
    const handleTab = (selected) => {
        setCategory(selected);
    };
    console.log("clicked category", category)
    useEffect(() => {
        // Filter data based on the selected category
        const filteredData = domain?.filter((item) => item.category === category);
        setCategoryData(filteredData);
    }, [category, domain]);

    console.log("selected data", categoryData);
const handleCategory=()=>{
    setShowCategory(!showCategory)
}
    return (
        <Container>
            <Heading>Price by category</Heading>
            <div className="flex mx-10 flex-col md:flex-row ">
                <div className="md:grid w-1/6 h-fit hidden">
                    <button
                        className={` p-2 text-center font-semibold ${category === "education" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("education")}
                    >
                        Education
                    </button>

                    <button
                        className={` p-2 text-center font-semibold ${category === "commerce" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("commerce")}
                    >
                        Commerce
                    </button>

                    <button
                        className={` p-2 text-center font-semibold  ${category === "health" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("health")}
                    >
                        Health
                    </button>
                    <button
                        className={` p-2 text-center font-semibold  ${category === "government" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("government")}
                    >
                        Government
                    </button>
                    <button
                        className={` p-2 text-center font-semibold  ${category === "industry" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("industry")}
                    >
                        Industry
                    </button>
                    <button
                        className={` p-2 text-center font-semibold  ${category === "media" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("media")}
                    >
                        Media
                    </button>
                    <button
                        className={` p-2 text-center font-semibold  ${category === "sport" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("sport")}
                    >
                        Sport
                    </button>
                    <button
                        className={` p-2 text-center font-semibold ${category === "technology" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                            }`}
                        onClick={() => handleTab("technology")}
                    >
                        Technology
                    </button>
                </div>
                <div className="flex md:hidden">
                    <div>
                        <p className="flex items-center text-xl dark:text-white"><CgMenuGridR onClick={handleCategory} className="text-3xl dark:text-sky-200"></CgMenuGridR> Select Category</p>
                        <div className="relative">
                       {showCategory?
                        <div className="grid w-full h-fit md:hidden z-10 absolute mt-2 " data-aos="fade-right">
                        <button
                            className={` p-2 text-center font-semibold ${category === "education" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("education")}
                        >
                            Education
                        </button>
    
                        <button
                            className={` p-2 text-center font-semibold ${category === "commerce" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("commerce")}
                        >
                            Commerce
                        </button>
    
                        <button
                            className={` p-2 text-center font-semibold  ${category === "health" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("health")}
                        >
                            Health
                        </button>
                        <button
                            className={` p-2 text-center font-semibold  ${category === "government" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("government")}
                        >
                            Government
                        </button>
                        <button
                            className={` p-2 text-center font-semibold  ${category === "industry" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("industry")}
                        >
                            Industry
                        </button>
                        <button
                            className={` p-2 text-center font-semibold  ${category === "media" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("media")}
                        >
                            Media
                        </button>
                        <button
                            className={` p-2 text-center font-semibold  ${category === "sport" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("sport")}
                        >
                            Sport
                        </button>
                        <button
                            className={` p-2 text-center font-semibold ${category === "technology" ? "bg-fourthColor text-white" : "bg-gray-300 text-fourthColor"
                                }`}
                            onClick={() => handleTab("technology")}
                        >
                            Technology
                        </button>
                    </div>
                        
                        : ""} 
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-7 mt-10 md:mx-10 mx-auto">
                    {categoryData?.map((item) => (
                        <CategoryCards key={item.id} data={item}></CategoryCards>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default PriceByCategory;
