import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import useCart from '../../Hock/useCart';

const Completionist = () => <button  className="btn btn-outline btn-sm text-white bg-thirdColor">Renew</button>;

const StatusCountDown = ({cart}) => {
  const date= parseInt(cart?.purchaseDate) 
  const time= parseInt(cart?.years)*365*24*60*60*1000
  
  console.log("date and time:",date,time);

   
  const renderer = ({days,hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      const years= Math.floor(days/365) 
      const months= Math.floor((days%365)/30) 
      // return <span>{days} d : {hours} h : {minutes} m: {seconds} s Remaining</span>;
      return <span>{years} y : {months} m Remaining</span>;
    }
  };
  return (
    <Countdown
      date={date + time}
      renderer={renderer}
    />
  );
};
export default StatusCountDown;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatusCountDown />
  </React.StrictMode>
);