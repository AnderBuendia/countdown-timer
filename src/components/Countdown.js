const Countdown = ({timeLeft}) => {
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval, index) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span key={index}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    return (
        <>
            { timerComponents.length ? 
                timerComponents 
                : 
                <span>Time's up!</span>}
        </>
    )
}

export default Countdown;