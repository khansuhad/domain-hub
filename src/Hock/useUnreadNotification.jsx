import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUnreadNotifications = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: notification = [],
    isLoading : isLoadingUnreadNotification ,
    isPending: isPendingUnreadNotification,
    refetch: refetchNotification,
  } = useQuery({
    queryKey: ["unreadnotification"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allunreadnotifications`);
      console.log(res?.data);
      return res?.data;
    },
  });
  return { notification,isPendingUnreadNotification, isLoadingUnreadNotification , refetchNotification };
};

export default useUnreadNotifications;