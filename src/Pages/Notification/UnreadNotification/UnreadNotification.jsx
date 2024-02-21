import {  NavLink } from "react-router-dom";
import Container from "../../../Component/UI/Container";
import Heading from "../../../Component/UI/Heading";
import useUnreadNotifications from "../../../Hock/useUnreadNotification";
import UnreadNotificationCart from "./UnreadNotificationCart";
import { useEffect } from "react";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import "../active.css"
import UseAuth from "../../../Hock/UseAuth";
import { useTranslation } from "react-i18next";

const UnreadNotification = () => {
  const { t } = useTranslation()
  const {user} = UseAuth();
  const useAxios = useAxiosPublic();
    const {notification , refetchNotification} = useUnreadNotifications();
    console.log(notification);
 
    useEffect(  () => {
const myUser = notification?.find( noti => noti.email === user?.email)
console.log(myUser?.email);
if(myUser?.email){

  return () =>{
    updateAllNotifications();
  }
}


    },[])

    const updateAllNotifications = () =>{
      const status = "readed"
      useAxios.patch("/notifications/updatestatus" , {status})
      .then(res => {
        // refetchNotification();
       console.log(res?.data);
    })
  }
    return (
        <div className="bg-firstColor min-h-screen">
         
        <div className=" bg-fourthColor lg:w-[80%] mx-auto  h-full min-h-screen">
        <Container>
        <Heading className="text-7xl text-white">{t("navNotification")}</Heading>
         <hr /><br />
         <div className="flex gap-2  px-10">
              <NavLink to='/notifications' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "btn  abc" : "btn  btn-primary "
              } > {t("notificationAll")} </NavLink >
              <NavLink to='/unreadnotifications' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "btn   abc" : "btn  btn-primary "
              } > {t("notificationUnread")} </NavLink >
            </div>
{ 
        notification.length <= 0 ? 
       <div className="flex w-[80%] mx-auto justify-center items-center  mt-40">
              <h1 className="text-sixthColor text-5xl  ">{t("noNotification")}</h1>
            </div>
        :
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