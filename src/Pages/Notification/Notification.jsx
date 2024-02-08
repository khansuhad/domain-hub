import {  NavLink } from "react-router-dom";
import Container from "../../Component/UI/Container";
import Heading from "../../Component/UI/Heading";
import useNotifications from "../../Hock/UseNotifications";
// import useAxiosPublic from "../../Hock/useAxiosPublic";
import NotificationCart from "./NotificationCart";
import "./active.css"
import useAxiosPublic from "../../Hock/useAxiosPublic";
import Swal from "sweetalert2";




const Notification = () => {

 
 
   const useAxios = useAxiosPublic();
    // const useAxios = useAxiosPublic();
    const {notification , refetchNotification} = useNotifications();
    const handleDeleteAll = () =>{
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
              useAxios.delete("/notifications")
      .then(res => {
        console.log(res?.data);
        refetchNotification();
      })
                
                }

            }
        );
     
    }
    // console.log(notification.timestamp.year);
    
  

    return (
  
         <div className=" bg-firstColor min-h-screen">
           <div className="bg-fourthColor lg:w-[80%] mx-auto min-h-screen">
           <Container>
            <Heading className="text-7xl text-white">Notifications</Heading>
            <hr /><br />
<div className="flex justify-between px-10">
           <div className="flex gap-2">
           <NavLink  to='/notifications'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn  abc" : "btn  btn-primary "
  } > All </NavLink >
            <NavLink  to='/unreadnotifications'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn   abc" : "btn  btn-primary "
  } > Unread </NavLink >
           </div>
          {
            notification.length > 0 && <div>
             <button onClick={handleDeleteAll} className="btn btn-error text-white">Delete All</button>
            </div>
          }
</div>

        { 
        notification.length <= 0 ? <div className="flex justify-center items-center  mt-40">
          <h1 className="text-sixthColor text-5xl  ">No Available Notifications</h1>
        </div> :
        <div>
            {
                notification?.map(noti => <NotificationCart key={noti?._id} noti={noti} refetchNotification={refetchNotification}></NotificationCart>  )
            }
          </div>}
        </Container>
           </div>
           
        </div>
  
    );
};

export default Notification;