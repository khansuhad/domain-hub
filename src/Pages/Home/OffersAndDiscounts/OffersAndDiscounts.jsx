import { useTranslation } from "react-i18next";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import useGetSpecialDiscount from "../../../Hock/useGetSpecialDiscount";
import OffersAndDiscountsCards from "./OffersAndDiscountsCards";
import Container from "../../../Component/UI/Container";
const OffersAndDiscounts = () => {
  const { t } = useTranslation();
  const { info } = useGetSpecialDiscount();
  console.log(info);
  return (
    <Container>
      <Heading>{t("discountTitle")}</Heading>

      <Description>{t("discountDes")}</Description>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-[5%] md:px-[10%] my-10">
        {info?.map((item) => (
          <OffersAndDiscountsCards
            key={item.id}
            data={item}
          ></OffersAndDiscountsCards>
        ))}
      </div>
    </Container>
  );
};

export default OffersAndDiscounts;
