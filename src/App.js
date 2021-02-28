import React, {useState, useEffect} from 'react';
import './index.css';
import { setCountdownTwoWeeks } from './utils/setCountdownTwoWeeks';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  const countdownTwoWeeks = setCountdownTwoWeeks();

  const calculateTimeLeft = date => {
    let difference = +new Date(`${date}`) - +new Date();

    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    for (let i in timeLeft) {
      if (timeLeft[i] < 10) {
        timeLeft[i] = ("0" + timeLeft[i]).slice(-2);
      } 
    }

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
    
      <Footer />
    </div>
  );
}

export default App;
