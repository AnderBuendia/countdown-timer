import StaticCard from './card/StaticCard';
import AnimatedCard from './card/AnimatedCard';

const FlipUnitContainer = ({shuffle, prevDigit, unit, digit}) => {

    if (prevDigit < 10) {
        prevDigit = ("0" + prevDigit).slice(-2);
    }

    /* Shuffle digits */
    const digit1 = shuffle ? prevDigit : digit;
    const digit2 = !shuffle ? prevDigit : digit;

    /* Shuffle animations */
    const animation1 = shuffle ? 'fold' : 'unfold';
    const animation2 = !shuffle ? 'fold' : 'unfold';

    return (

        <div className="flipUnitContainer">
            <StaticCard
                digit={digit}
                position={'upperCard'}
            />
            <StaticCard
                digit={prevDigit}
                position={'lowerCard'}
            />
            <AnimatedCard
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                digit={digit2}
                animation={animation2}
            />
            <p className="flipUnitLabel">{unit}</p>
        </div>
        
    )
}

export default FlipUnitContainer;