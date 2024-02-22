import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetSpecialDiscount = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: info = [],
    isPending: isPendingInfo,
    refetch: refetchInfo,
  } = useQuery({
    queryKey: ["specialDiscount"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/special-discounts-domain`);
      console.log(res.data);
      return res.data;
    },
  });
  return { info, isPendingInfo, refetchInfo };
};

export default useGetSpecialDiscount;
