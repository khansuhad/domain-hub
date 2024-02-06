import moment from "moment";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import PropTypes from "prop-types";

const UnreadNotificationCart = ({noti , refetchNotification}) => {
    
    const useAxios = useAxiosSecure();
    const [timeDifference, setTimeDifference] = useState('');
    useEffect(() => {
        const intervalId = setInterval(() => {
          const newDynamicTime = moment(noti.timeSpace).fromNow();
          setTimeDifference(newDynamicTime);
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      }, [noti.timeSpace]); 
    const handleDelete = (id) => {
        console.log(id);
        Swal
        .fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(id);
                const res = await useAxios.delete(`/notifications/id/${id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    Swal.fire({
                        title: "Deleted!",
                        text:  " Item has been deleted",
                        icon: "success"
                    });
                    refetchNotification();
                }

            }
        });
    }
    return (
        <div  className="bg-sixthColor m-5 p-5 rounded flex justify-between items-center">
        <div>
       
       <h1 className="font-medium">{noti?.messages}</h1>
       <p className="text-green-600 font-bold">{timeDifference} </p>
       </div>
     <div>
     <MdDelete
    
               onClick={() => handleDelete(noti?._id)}
               className="text-red-500 ml-2 cursor-pointer text-xl"
             />
            
            
     </div>
        </div>
    );
};
UnreadNotificationCart.propTypes = {
    noti: PropTypes.node,
    refetchNotification: PropTypes.node,
    
  };
export default UnreadNotificationCart;