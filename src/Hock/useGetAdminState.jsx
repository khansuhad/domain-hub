import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetAdminState = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: stats = [],
    isPending: isPendingStats,
    refetch: refetchStats,
  } = useQuery({
    queryKey: ["stats" ],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin/states`);
      return res.data;
    },
  });
  return { stats, isPendingStats, refetchStats };
};

export default useGetAdminState;
