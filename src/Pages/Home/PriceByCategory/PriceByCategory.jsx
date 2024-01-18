import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import { useEffect, useState } from "react";
import CategoryCards from "./CategoryCards";

const PriceByCategory = ({ data }) => {
    const [category, setCategory] = useState(null);
    const [categoryData, setCategoryData] = useState([]);

    const handleTab = (selected) => {
        setCategory(selected);
    };
    console.log("clicked category", category)
    useEffect(() => {
        // Filter data based on the selected category
        const filteredData = data.filter((item) => item.category === category);
        setCategoryData(filteredData);
    }, [category, data]);

    console.log("selected data", categoryData);

    return (
        <Container>
            <Heading>Price by category</Heading>
            <div className="flex justify-center">
                <button
                    className={`w-[100px] p-2 text-center font-semibold rounded-l-lg ${category === "domain" ? "bg-fourthColor text-white" : "bg-firstColor text-fourthColor"
                        }`}
                    onClick={() => handleTab("domain")}
                >
                    Domain
                </button>

                <button
                    className={`w-[100px] p-2 text-center font-semibold ${category === "email" ? "bg-fourthColor text-white" : "bg-firstColor text-fourthColor"
                        }`}
                    onClick={() => handleTab("email")}
                >
                    Email
                </button>

                <button
                    className={`w-[100px] p-2 text-center font-semibold rounded-r-lg ${category === "hosting" ? "bg-fourthColor text-white" : "bg-firstColor text-fourthColor"
                        }`}
                    onClick={() => handleTab("hosting")}
                >
                    Hosting
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-10 gap-5 md:mx-10 mx-auto">
                {categoryData?.map((item) => (
                    <CategoryCards key={item.id} data={item}></CategoryCards>
                ))}
            </div>
        </Container>
    );
};

export default PriceByCategory;
