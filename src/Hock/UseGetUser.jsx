import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useGetUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    data: info = {},
    isPending: isPendingInfo,
    refetch: refetchInfo,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return { info, isPendingInfo, refetchInfo };
};

export default useGetUser;
