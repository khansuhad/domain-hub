import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import UseAuth from "./UseAuth";

const useMyReview = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const {
    data: myReviews = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myReview?email=${user?.email}`);
      return res?.data;
    },
  });

  return [myReviews, loading, refetch];
};
export default useMyReview;
