/* eslint-disable react/prop-types */
const MyAllReviewCard = ({ myReview }) => {
  return (
    <div className="card w-96 bg-fourthColor text-white shadow-xl">
      <figure className="px-10 pt-10">
        <img className="w-[300px] h-[200px]" src={myReview?.userPhoto} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{myReview?.userName}</h2>
        <p>{myReview?.domainName}</p>
        <p className="h-[50px]">{myReview?.feedback}</p>
        <div className="rating" defaultValue={myReview?.rating}>
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
      </div>
    </div>
  );
};

export default MyAllReviewCard;
