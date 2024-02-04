import Container from "../../Component/UI/Container";
import Heading from "../../Component/UI/Heading";
import useNotifications from "../../Hock/UseNotifications";
// import useAxiosPublic from "../../Hock/useAxiosPublic";
import NotificationCart from "./NotificationCart";




const Notification = () => {

 
 
   
    // const useAxios = useAxiosPublic();
    const {notification , refetchNotification} = useNotifications();
    // console.log(notification.timestamp.year);
    
  

    return (
        <div className="lg:w-[80%] mx-auto ">
           <div className="bg-fourthColor">
           <Container>
            <Heading className="text-7xl text-white">Notifications</Heading>
            <hr /><br />
            <button className="btn btn-primary ml-10"> All </button>

          <div>
            {
                notification?.map(noti => <NotificationCart key={noti?._id} noti={noti} refetchNotification={refetchNotification}></NotificationCart>  )
            }
          </div>
        </Container>
           </div>
           
        </div>
    );
};

export default Notification;