const StaticCard = ({digit, position}) => {
    return (  
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
}
 
export default StaticCard;