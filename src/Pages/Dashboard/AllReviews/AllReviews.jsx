import Heading from "../../../Component/UI/Heading";
import useReview from "../../../Hock/useReview";
import AllReviewCard from "./AllReviewCard";

const AllReviews = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <div className="flex justify-center py-10 bg-firstColor items-center min-h-screen dark:bg-slate-700">
      <div>
        <Heading>All Reviews</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
          {reviews?.map((review) => (
            <AllReviewCard key={review._id} review={review}></AllReviewCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
