

import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFreeTrial = () => {
    const axiosPublic =useAxiosPublic();
    const {data: freeTrialUsers = [],isPending: loading,refetch} = useQuery({
        queryKey: ['freeTrialUsers'],
        queryFn: async() =>{
            const res =await axiosPublic.get('/freeTrialUsers');
            return res.data;

        }
    })

     return [freeTrialUsers,loading,refetch]
};

export default useFreeTrial;