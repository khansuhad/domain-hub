import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetBestHostingPlan = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: info = [],
    isPending: isPendingInfo,
    refetch: refetchInfo,
  } = useQuery({
    queryKey: ["bestHostingPlan"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/best-hosting-plan`);
      console.log(res.data);
      return res.data;
    },
  });
  return { info, isPendingInfo, refetchInfo };
};

export default useGetBestHostingPlan;
