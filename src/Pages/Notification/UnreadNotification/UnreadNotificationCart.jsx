import moment from "moment";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import UseAuth from "../../../Hock/UseAuth";

const UnreadNotificationCart = ({noti }) => {
    // const {user} = UseAuth();
    const [timeDifference, setTimeDifference] = useState('');
    console.log(timeDifference);
    useEffect(() => {
      // console.log(noti?.userEmail,user?.email);
      // if(user?.email === noti?.userEmail){
        const intervalId = setInterval(() => {
          const newDynamicTime = moment(noti.timeSpace).fromNow();
          setTimeDifference(newDynamicTime);
        }, 1000); // Update every second
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
      } 
      , [noti.timeSpace ]);   
  
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="center-center"  className="bg-sixthColor m-5 p-5 rounded flex justify-between items-center">
        <div>
       
       <h1 className="font-medium">{noti?.messages}</h1>
       <p className="text-green-600 font-bold">{timeDifference} </p>
       </div>
  
        </div>
    );
};
UnreadNotificationCart.propTypes = {
    noti: PropTypes.node,
    refetchNotification: PropTypes.node,
    
  };
export default UnreadNotificationCart;