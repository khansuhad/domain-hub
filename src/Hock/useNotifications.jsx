import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useNotifications = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: notification = [],
    isLoading : isLoadingNotification ,
    isPending: isPendingNotification,
    refetch: refetchNotification,
  } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/notifications`);
      console.log(res?.data);
      return res?.data;
    },
  });
  return { notification,isLoadingNotification, isPendingNotification, refetchNotification };
};

export default useNotifications;
