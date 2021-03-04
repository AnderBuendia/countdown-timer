import React, {useState, useEffect } from 'react';
import './index.css';
import usePrevious from './hooks/usePrevious';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  const [time, setTime] = useState(0);
  const [shuffle, setShuffle] = useState({
    minutes: true,
    seconds: true,
  });

  const resetInterval = 1209600; // 14 days = 1209600s
  const timeRemain = resetInterval - (time % resetInterval);
  
  let timeleft = { 
    days: Math.floor(timeRemain / (60 * 60 * 24)),
    hours: Math.floor((timeRemain / (60 * 60)) % 24),
    minutes: Math.floor((timeRemain / 60) % 60),
    seconds: (timeRemain % 60)
  };

  console.log(timeleft)
  const prevDigit = usePrevious(timeleft)
  

  useEffect(() => {
    const timer = setInterval(() => {
      updateClock();  
    }, 1000);
    
    return () => clearInterval(timer);
  })

  const updateClock = () => {
    if (prevDigit) {
      Object.keys(timeleft).map(interval => {
        let digit = timeleft[interval]
        if (digit !== prevDigit[interval]) {
          setShuffle({ ...shuffle, [interval]: !shuffle[interval]})
        }

        return {timeleft, digit};
      })
    }

    setTime((prevTime) => prevTime + 1);
  }
  
  return (
    <div className="container">
      
      <h1 className="title">We're launching soon</h1>
      <Countdown 
        timeleft={timeleft} 
        shuffle={shuffle} 
        prevDigit={prevDigit}
      />
      <Footer />
    </div>
  );
}

export default App;
