const Countdown = ({prevCount, timeleft}) => {
    const timerComponents = [];

    Object.keys(timeleft).forEach((interval, index) => {
      if (!timeleft[interval]) {
        return;
      }

      timerComponents.push(
        <div key={index} className="destructureTimer">
          <p className="timer-time"> {timeleft[interval]} {" "}</p>
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