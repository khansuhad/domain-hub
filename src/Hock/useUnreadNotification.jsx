import UseAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUnreadNotifications = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: notification = [],
    isLoading : isLoadingUnreadNotification ,
    isPending: isPendingUnreadNotification,
    refetch: refetchNotification,
  } = useQuery({
    queryKey: ["unreadNotification"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allunreadnotifications/${user.email}`);
      console.log(res?.data);
      return res?.data;
    },
  });
  return { notification,isPendingUnreadNotification, isLoadingUnreadNotification , refetchNotification };
};

export default useUnreadNotifications;