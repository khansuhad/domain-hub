import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import { useEffect, useState } from "react";
import CategoryCards from "./CategoryCards";
import { CgMenuGridR } from "react-icons/cg";
import useDomain from "../../../Hock/useDomain";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { MdCancel } from "react-icons/md";

const PriceByCategory = ({ data }) => {
  const [domain, loading, refetch] = useDomain();
  const [category, setCategory] = useState("education");
  const [categoryData, setCategoryData] = useState([]);
  const [showCategory, setShowCategory] = useState(false);
  const { t } = useTranslation();
  const handleTab = (selected) => {
    setCategory(selected);
  };
  console.log("clicked category", category);
  useEffect(() => {
    // Filter data based on the selected category
    const filteredData = domain?.filter((item) => item.category === category);
    setCategoryData(filteredData);
  }, [category, domain]);

  console.log("selected data", categoryData);
  const handleCategory = () => {
    setShowCategory(!showCategory);
  };
  return (
    <>
      <Helmet>
        <title>DomainHub | Price By Category</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <Container>
        <Heading>{t("categoryTitle")}</Heading>
        <div className="flex lg:mx-10 mx-7 flex-col md:flex-row gap-4">
          <div className="md:grid w-1/5 h-fit hidden mt-10">
            <button
              className={` p-2 text-center font-semibold ${
                category === "education"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("education")}
            >
              {t("category1")}
            </button>

            <button
              className={` p-2 text-center font-semibold ${
                category === "commerce"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("commerce")}
            >
              {t("category2")}
            </button>

            <button
              className={` p-2 text-center font-semibold  ${
                category === "health"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("health")}
            >
              {t("category3")}
            </button>
            <button
              className={` p-2 text-center font-semibold  ${
                category === "government"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("government")}
            >
              {t("category4")}
            </button>
            <button
              className={` p-2 text-center font-semibold  ${
                category === "industry"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("industry")}
            >
              {t("category5")}
            </button>
            <button
              className={` p-2 text-center font-semibold  ${
                category === "media"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("media")}
            >
              {t("category6")}
            </button>
            <button
              className={` p-2 text-center font-semibold  ${
                category === "sport"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("sport")}
            >
              {t("category7")}
            </button>
            <button
              className={` p-2 text-center font-semibold ${
                category === "technology"
                  ? "bg-fourthColor text-white"
                  : "bg-[#010B3C] text-white"
              }`}
              onClick={() => handleTab("technology")}
            >
              {t("category8")}
            </button>
          </div>
          <div className="flex md:hidden">
            <div>
              <p className="flex items-center text-xl text-white">
                {showCategory?<MdCancel
                onClick={handleCategory}
                  className="text-3xl text-sky-200"></MdCancel>:<CgMenuGridR
                  onClick={handleCategory}
                  className="text-3xl text-sky-200"
                ></CgMenuGridR> }
                
                {t("categorySelect")}{" "}
              </p>
              <div className="relative">
                {showCategory ? (
                  <div
                    className="grid w-full h-fit md:hidden z-10 absolute mt-2 "
                    data-aos="fade-right"
                  >
                    <button
                      className={` p-2 text-center font-semibold ${
                        category === "education"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("education")}
                    >
                      {t("category1")}
                    </button>

                    <button
                      className={` p-2 text-center font-semibold ${
                        category === "commerce"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("commerce")}
                    >
                      {t("category2")}
                    </button>

                    <button
                      className={` p-2 text-center font-semibold  ${
                        category === "health"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("health")}
                    >
                      {t("category3")}
                    </button>
                    <button
                      className={` p-2 text-center font-semibold  ${
                        category === "government"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("government")}
                    >
                      {t("category4")}
                    </button>
                    <button
                      className={` p-2 text-center font-semibold  ${
                        category === "industry"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("industry")}
                    >
                      {t("category5")}
                    </button>
                    <button
                      className={` p-2 text-center font-semibold  ${
                        category === "media"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("media")}
                    >
                      {t("category6")}
                    </button>
                    <button
                      className={` p-2 text-center font-semibold  ${
                        category === "sport"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("sport")}
                    >
                      {t("category7")}
                    </button>
                    <button
                      className={` p-2 text-center font-semibold ${
                        category === "technology"
                          ? "bg-fourthColor text-white"
                          : "bg-[#010B3C] text-white"
                      }`}
                      onClick={() => handleTab("technology")}
                    >
                      {t("category8")}
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-7 md:gap-5 mt-10 mx-auto">
            {categoryData?.map((item) => (
              <CategoryCards key={item.id} data={item}></CategoryCards>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PriceByCategory;
