import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const UseAllGetUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: info = [],
    isPending: isPendingInfo,
    refetch: refetchInfo,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  return { info, isPendingInfo, refetchInfo };
};

export default UseAllGetUser;
