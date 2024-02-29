import Rating from "react-rating";

/* eslint-disable react/prop-types */
const ReviewsCard = ({ review }) => {
  return (
    <div data-aos="zoom-in-left" className="card flex m-5 flex-col justify-center h-96   bg-fourthColor shadow-xl   text-white p-2">
 <div className="flex flex-col gap-3 justify-center  items-center w-[50%] mx-auto mt-0" >
 <figure className="  w-20 h-20 rounded-full flex justify-center ">
        <img className="w-20 h-20  rounded-full" src={review?.userPhoto} />
      </figure> 
 </div>
 <h2 className=" flex justify-center text-center">{review?.userName}</h2>
 <div className=" flex justify-center text-center">
 <Rating
                    emptySymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="orange"
                        className="w-6 h-6"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                        </svg>
                    }
                    initialRating={review?.rating}
                    readonly
                />
 </div>

      <div className=" mt-5 py-2 flex flex-col justify-start ">
      
      <p className="text-start"><span className=" font-bold"> Domain Name : </span>    {review?.domainName}</p>
        <p className="h-[50px] text-start mt-1 text-base"><span className="font-bold"> Review : </span>{review?.feedback.slice(0,80)}{ review?.feedback.length > 80 && <span className="text-base ml-3">...{/* Open the modal using document.getElementById('ID').showModal() method */}
<a className="underline cursor-pointer italic" onClick={()=>document.getElementById(`${review?._id}`).showModal()}>Read More</a>
<dialog id={`${review?._id}`} className="modal">
  <div className="modal-box bg-fourthColor">
  <div className="card flex m-5 flex-col justify-center   bg-fourthColor    text-white px-3">
 <div className="flex flex-col gap-3 justify-center items-center w-[50%] mx-auto" >
 <figure className="  w-20 h-20 rounded-full flex justify-center">
        <img className="w-20 h-20  rounded-full" src={review?.userPhoto} />
      </figure> 
 </div>
 <h2 className=" flex justify-center text-center">{review?.userName}</h2>
 <div className=" flex justify-center text-center">
 <Rating
                    emptySymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                        </svg>
                    }
                    fullSymbol={
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="orange"
                        className="w-6 h-6"
                        >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                        </svg>
                    }
                    initialRating={review?.rating}
                    readonly
                />
 </div>

      <div className=" mt-2 py-2 flex flex-col justify-start ">
      
      <p className="text-start"><span className=" font-bold"> Domain Name : </span>    {review?.domainName}</p>
        <p className=" text-start mt-1 text-base"><span className="font-bold"> Review : </span>{review?.feedback} </p>
       
      </div>
</div>
    <div className="modal-action mt-4 flex justify-center">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog></span> }</p>
       
      </div>
</div>
  );
};
export default ReviewsCard;