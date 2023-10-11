function setAlarm(employed, vacation){
    // if(employed && !vacation) {
    //     return true;
    // } return false;

    // return (employed && !vacation) ? true : false;
    return employed > vacation

}

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, false));

