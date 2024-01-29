import { useEffect, useState } from "react";
import Heading from "../../../Component/UI/Heading";
import { ReviewCard } from "./ReviewCard";

export const Review = () => {
  const [feedbacks, setfeedbacks] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setfeedbacks(data);
      });
  }, []);

  return (
    <div className="pt-40">
      <Heading>What People Say About Us</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20">
        {feedbacks?.map((feedback) => (
          <ReviewCard key={feedback.id} feedback={feedback}></ReviewCard>
        ))}
      </div>
    </div>
  );
};
