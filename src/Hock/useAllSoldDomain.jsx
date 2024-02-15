import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { async } from "@firebase/util";


const useAllSoldDomain = () => {
    const axiosSecure= useAxiosSecure()
    const {data:alldomain=[],isPending: loading,
        refetch,}= useQuery({

        queryKey: ["soldDomain"],
        queryFn: async ()=>{
            const res= await axiosSecure.get("/soldDomain")
            const data= res.data
            return data;
        }
    })
    return [alldomain,loading,refetch];
};

export default useAllSoldDomain;