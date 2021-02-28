const Countdown = ({timeLeft}) => {
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <div key={index} className="destructureTimer">
          <p> {timeLeft[interval]} {" "}</p>
          <p className="timer-label">{interval}</p>
        </div>
      );
    });

    return (
        <>
            { timerComponents.length ? 
                <div className="timer">
                  {timerComponents}
                </div> 
                : 
                <span>Time's up!</span>}
        </>
    )
}

export default Countdown;