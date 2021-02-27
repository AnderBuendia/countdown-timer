export const setCountdownTwoWeeks = () => {
    let dateTwoWeeks = new Date();
    dateTwoWeeks.setDate(dateTwoWeeks.getDate() + 14);
    const formatDate = dateTwoWeeks.toLocaleDateString('en-US');
    
    return formatDate;
}