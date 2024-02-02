/* eslint-disable react/prop-types */
const AllReviewCard = ({ review }) => {
  return (
    <div className="card w-96 bg-fourthColor shadow-xl text-white ">
      <figure className="px-10 pt-10">
        <img className="w-[300px] h-[200px]" src="https://i.postimg.cc/mgBGBw2Y/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated.jpg" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{review?.userName}</h2>
        <p>{review?.domainName}</p>
        <p className="h-[50px]">{review?.feedback}</p>
        <div className="rating" defaultValue={review?.rating}>
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

export default AllReviewCard;
