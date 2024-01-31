import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTruePayment = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const {
    data: trueCarts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/paymentTrueCarts?email=${user?.email}&payment=true`
      );
      console.log(res?.data);
      return res?.data;
    },
  });

  return [trueCarts, loading, refetch];
};
export default useTruePayment;
