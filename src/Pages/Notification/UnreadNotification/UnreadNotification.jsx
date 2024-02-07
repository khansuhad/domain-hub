import { Link, NavLink } from "react-router-dom";
import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import useUnreadNotifications from "../../../Hock/useUnreadNotification";
import UnreadNotificationCart from "./UnreadNotificationCart";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import "../active.css"

const UnreadNotification = () => {
  // const useAxios = useAxiosSecure(); 
  const useAxios = useAxiosPublic();
    const {notification , refetchNotification} = useUnreadNotifications();
    console.log(notification);
    useEffect(  () => {

   

    return () =>{
      updateAllNotifications();
    }
   

    },[])

    const updateAllNotifications = () =>{
      const status = "readed"
      useAxios.patch("/notifications/updatestatus" , {status})
      .then(res => {
       console.log(res?.data);
    })
  }
    return (
        <div className="bg-firstColor min-h-screen">
         
        <div className=" bg-fourthColor lg:w-[80%] mx-auto  h-full min-h-screen">
        <Container>
         <Heading className="text-7xl text-white">Notifications</Heading>
         <hr /><br />
         <div className="flex gap-2 mx-10 ">
         <NavLink  to='/notifications'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn   abc" : "btn  btn-primary "
  } > All </NavLink >
            <NavLink  to='/unreadnotifications'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "btn abc" : "btn  btn-primary "
  } > Unread </NavLink >
</div>
{ 
        notification.length <= 0 ? <div className="flex justify-center items-center  mt-40">
          <h1 className="text-sixthColor text-5xl  ">No Available Notifications</h1>
        </div> :
       <div>
         {
             notification?.map(noti => <UnreadNotificationCart key={noti?._id} noti={noti} refetchNotification={refetchNotification}/> )
         }
       </div> }
     </Container>
        </div>
        
     </div>
      
    );
};

export default UnreadNotification;