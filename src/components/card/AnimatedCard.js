const AnimatedCard = ({digit, animation}) => {
    return (  
        <div className={`flipCard ${animation}`}>
            <span >{digit}</span>
        </div>
    );
}
 
export default AnimatedCard;