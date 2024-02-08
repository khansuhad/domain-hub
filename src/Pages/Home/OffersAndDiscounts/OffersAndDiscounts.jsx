import { useTranslation } from "react-i18next";
import Container from "../../../Component/UI/Container";
import Description from "../../../Component/UI/Description";
import Heading from "../../../Component/UI/Heading";
import OffersAndDiscountsCard from "./OffersAndDiscountsCard";

const OffersAndDiscounts = () => {
  const {t}= useTranslation()
  return (

     <div>
       <Heading>{t("discountTitle")}</Heading>

<Description>
{t("discountDes")}
</Description>
<OffersAndDiscountsCard/>
     </div>
    
  );
};

export default OffersAndDiscounts;
