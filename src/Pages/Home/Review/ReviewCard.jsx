/* eslint-disable react/prop-types */
export const ReviewCard = ({ feedback }) => {
  const { userPhoto, userName, review } = feedback;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img className="w-[400px] h-[300px]" src={userPhoto} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userName}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};
