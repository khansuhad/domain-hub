import Heading from "../../../Component/UI/Heading";
import useMyReview from "../../../Hock/useMyReview";
import MyAllReviewCard from "./MyAllReviewCard";

const MyAllReviews = () => {
  const [myReviews] = useMyReview();
  return (
    <div className="flex justify-center items-center min-h-screen bg-firstColor py-10 dark:bg-slate-700">
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Heading>My Reviews</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
            {myReviews?.map((myReview) => (
              <MyAllReviewCard
                key={myReview?._id}
                myReview={myReview}
              ></MyAllReviewCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAllReviews;
