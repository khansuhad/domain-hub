import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import { useTranslation } from "react-i18next";
import BestHostingPlanCard from "./BestHostingPlanCard";
import useGetBestHostingPlan from "../../../Hock/useGetBestHostingPlan";

const BestHostingPlan = () => {
  const { t } = useTranslation();
  const { info } = useGetBestHostingPlan();
  return (
    <Container>
      <div className="bg-firstColor p-3 dark:bg-[#191919] dark:text-white">
        <Heading>{t("planHeader")}</Heading>
        <Description>
          {t("planDes")} <br />
          {t("planDes2")}
        </Description>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-[5%] md:px-[10%] mt-10">
          {info?.map((item) => (
            <BestHostingPlanCard
              key={item.id}
              data={item}
            ></BestHostingPlanCard>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BestHostingPlan;
