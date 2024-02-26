import { Helmet } from "react-helmet";
import Heading from "../../../Component/UI/Heading";
import useMyReview from "../../../Hock/useMyReview";
import MyAllReviewCard from "./MyAllReviewCard";

const MyAllReviews = () => {
  const [myReviews] = useMyReview();
  return (
    <>
      <Helmet>
        <title>DomainHub | All Reviews</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <div className="flex justify-center items-center min-h-screen bg-firstColor py-10 dark:bg-slate-700">
        <div className="flex justify-center items-center min-h-screen">
          <div>
            <Heading>My Reviews</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-center gap-5 ">
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
    </>
  );
};

export default MyAllReviews;
