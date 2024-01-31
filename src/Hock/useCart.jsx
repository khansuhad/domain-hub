// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useSelector } from "react-redux";

const useCart = () => {
  const userInfo = useSelector((state) => state.user.currentUser);
  const axiosPublic = useAxiosPublic();
  const {
    data: carts = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["carts", userInfo?.email],
    queryFn: async () => {
      // const res =await axiosPublic.get('/carts');
      // const filteredData = res.data.filter(item => item.email === userInfo.email);
      // return filteredData;

      const res = await axiosPublic.get(`/carts?email=${userInfo?.email}`);
      console.log(res);
      const filteredData = res.data;
      return filteredData;
    },
  });

  return [carts, loading, refetch];
};
export default useCart;
