import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

const Completionist = () => <button  className="btn btn-outline btn-sm text-white bg-thirdColor">Renew</button>;

const StatusCountDown = () => {
    // const date= 1707609600000
  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return <span>{days} d : {hours} h : {minutes} m: {seconds} s Remaining</span>;
    }
  };
  return (
    <Countdown
      date={Date.now() + 3600}
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