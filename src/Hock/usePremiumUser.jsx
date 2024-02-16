import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const usePremiumUser = () => {
  const { user, isLoading } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isPremium, isPending: isPremiumLoading } = useQuery({
    queryKey: [user?.email, "isPremium"],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/premium-user?email=${user.email}`);
      console.log(res.data);
      return res.data?.isPremium;
    },
  });
  return {isPremium, isPremiumLoading};
};

export default usePremiumUser;
