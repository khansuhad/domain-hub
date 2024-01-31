import Heading from "../../../Component/UI/Heading";
import useReview from "../../../Hock/useReview";
import { ReviewCard } from "./ReviewCard";

export const Review = () => {
  const [reviews] = useReview();

  return (
    <div className="pt-40">
      <Heading>What People Say About Us</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};
