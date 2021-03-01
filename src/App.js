import React, {useState, useEffect} from 'react';
import usePrevious from './hooks/usePrevious';
import './index.css';
import Countdown from './components/Countdown';
import Footer from './components/Footer';

function App() {
  const [time, setTime] = useState(0);

  const resetInterval = 1209600; // 14 days = 1209600s
  const timeRemain = resetInterval - (time % resetInterval);
  
  let timeleft = { 
    days: Math.floor(timeRemain / (60 * 60 * 24)),
    hours: Math.floor((timeRemain / (60 * 60)) % 24),
    minutes: Math.floor((timeRemain / 60) % 60),
    seconds: (timeRemain % 60)
  };

  const prevCount = usePrevious(timeleft);

  for (let i in timeleft) {
    if (timeleft[i] < 10) {
      timeleft[i] = ("0" + timeleft[i]).slice(-2);
    } 
  }


  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [])


  return (
    <div className="container">
      <h1 className="title">We're launching soon</h1>

      <Countdown prevCount={prevCount} timeleft={timeleft} />
    
      <Footer />
    </div>
  );
}

export default App;
