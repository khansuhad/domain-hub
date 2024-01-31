import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReview = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/review");
      return res?.data;
    },
  });

  return [reviews, loading, refetch];
};
export default useReview;
