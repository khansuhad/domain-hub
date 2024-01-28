// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useSelector } from "react-redux";

const useCart =()=>{
    const userInfo = useSelector((state) => state.user.currentUser);
    console.log(userInfo.email);
    const axiosPublic =useAxiosPublic();
    const {data: carts = [],isPending: loading,refetch} = useQuery({
        queryKey: ['carts'],
        queryFn: async() =>{
            const res =await axiosPublic.get('/carts');
            const filteredData = res.data.filter(item => item.email === userInfo.email);
            return filteredData;

        }
    })

     return [carts,loading,refetch]
}
export default useCart;