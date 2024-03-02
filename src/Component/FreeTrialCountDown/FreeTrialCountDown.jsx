import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


const Completionist = () => <Link to="/domainCategory"><button className="btn btn-outline btn-sm text-white bg-thirdColor">Purchase Now</button></Link>;

const FreeTrialCountDown = ({trialDate}) => {
  const date= trialDate 
  const time= 7*24*60*60*1000

  
  console.log("date and time:",date,time);

   
  const renderer = ({days,hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span>{days} d : {hours} h Remaining</span>;
    }
  };
  return (
    <Countdown
      date={date + time}
      renderer={renderer}
    />
  );
};
export default FreeTrialCountDown;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FreeTrialCountDown />
  </React.StrictMode>
);