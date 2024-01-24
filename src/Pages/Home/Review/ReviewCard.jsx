/* eslint-disable react/prop-types */
export const ReviewCard = ({feedback}) => {

    const {userName, review} = feedback

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{userName}</h2>
    <p>{review}</p>
  </div>
</div>
  )
}
