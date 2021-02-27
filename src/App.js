import React, {useState, useEffect} from 'react';
import './index.css';
import { setCountdownTwoWeeks } from './utils/setCountdownTwoWeeks';
import Countdown from './components/Countdown';

function App() {
  const countdownTwoWeeks = setCountdownTwoWeeks();

  const calculateTimeLeft = date => {
    let difference = +new Date(`${date}`) - +new Date();
    let timeLeft = {};

    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(countdownTwoWeeks));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(countdownTwoWeeks));
    }, 1000);

    return () => {
      clearTimeout(timer);
    }
  });

  return (
    <div className="container">
      <h1 className="title">We're launching soon</h1>

      <Countdown timeLeft={timeLeft} />
    
      <div className="footer">
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/AnderBuendia">anderb</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
