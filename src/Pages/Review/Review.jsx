import { useTranslation } from "react-i18next";
import Heading from "../../Component/UI/Heading";
import useReview from "../../Hock/useReview";
import { ReviewCard } from "./ReviewCard";

export const Review = () => {
  const [reviews] = useReview();
  const {t}= useTranslation()

  return (
    <div className="py-40 bg-firstColor dark:bg-[#191919]">
      <Heading>{t("reviewTitle")}</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};
