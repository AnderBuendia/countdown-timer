import FlipUnitContainer from './FlipUnitContainer';

const Countdown = ({timeleft, shuffle, prevDigit}) => {
  const timeleftArray = Object.keys(timeleft).map(unit => {
    let digit = timeleft[unit]
    
    if (digit < 10) {
      digit = ("0" + digit).slice(-2);
    }
     
    return {unit, digit}
  });

  return (
    <div className="timer">
      <FlipUnitContainer 
        shuffle={shuffle.days}
        prevDigit={prevDigit && prevDigit.days}
        unit={timeleftArray[0].unit}
        digit={timeleftArray[0].digit}
      />
      <FlipUnitContainer 
        shuffle={shuffle.hours}
        prevDigit={prevDigit && prevDigit.hours}
        unit={timeleftArray[1].unit}
        digit={timeleftArray[1].digit}
      />
      <FlipUnitContainer 
        shuffle={shuffle.minutes}
        prevDigit={prevDigit && prevDigit.minutes}
        unit={timeleftArray[2].unit}
        digit={timeleftArray[2].digit}
      />
      <FlipUnitContainer 
        shuffle={shuffle.seconds}
        prevDigit={prevDigit && prevDigit.seconds}
        unit={timeleftArray[3].unit}
        digit={timeleftArray[3].digit}
      />
    </div>
  );
}

export default Countdown;