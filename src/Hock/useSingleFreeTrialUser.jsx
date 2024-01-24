
import UseAuth from './UseAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useSingleFreeTrialUser = () => {
    const {user}=UseAuth()
    const axiosPublic =useAxiosPublic();
    const {data: singleFreeTrialUser = [],isPending: loading,refetch} = useQuery({
        queryKey: ['singleFreeTrialUser'],
        queryFn: async() =>{
            const res =await axiosPublic.get(`/freeTrialUsers?email=${user.email}`);
            return res.data;

        }
    })

     return [singleFreeTrialUser,loading,refetch]
};

export default useSingleFreeTrialUser;