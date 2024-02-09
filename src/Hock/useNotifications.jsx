import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useNotifications = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: notification = [],
    isLoading : isLoadingNotification ,
    isPending: isPendingNotification,
    refetch: refetchNotification,
  } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notifications/${user.email}`);
      console.log(res?.data);
      return res?.data;
    },
  });
  return { notification,isLoadingNotification, isPendingNotification, refetchNotification };
};

export default useNotifications;
