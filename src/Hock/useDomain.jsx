// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useDomain =()=>{
    const axiosPublic =useAxiosPublic();
    const {data: domain = [], isPending: loading, refetch} = useQuery({
        queryKey: ['domain'],
        queryFn: async() =>{
            const res =await axiosPublic.get('/domain');
            return res.data;

        }
    })

     return [domain,loading,refetch]
}
export default useDomain;