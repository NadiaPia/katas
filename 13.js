const talkingCalendar = function(date) {
    const array = date.split("/");   
    let day = array[2];   
    let suffixes = {'1':'st', '2':'nd', '3':'rd' };
    const suffix = suffixes[day[1]] || 'th';
    
    const months = {
     '01': "January",
     '02': "February",
     '03': "March",
     '04': "April",
     '05': "May",
     '06': "June",
     '07': "July",
     '08': "August",
     '09': "September",
     '10': "October",
     '11': "November",
     '12': "December"
    }

    let newData = `${months[array[1]]} ${array[2]}${suffix}, ${array[0]}`
    return newData;
};
 
 
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));
console.log(talkingCalendar("2006/05/21"));


//2-nd way


/*
const talkingCalendar = function(date) {
   const array = date.split("/");   
   let day = array[2];   
   let suffix = '';

   if(day === '01' || day === '21' ) {
        suffix = 'st'
    } else if(day === '02' || day === '22' ) {
        suffix = 'nd'
    } else if(day === '03' || day === '23' ) {
        suffix = 'rd'
    } else {
        suffix = 'th'
    }
   
    const months = {
    '01': "January",
    '02': "February",
    '03': "March",
    '04': "April",
    '05': "May",
    '06': "June",
    '07': "July",
    '08': "August",
    '09': "September",
    '10': "October",
    '11': "November",
    '12': "December"
}

   let newData = `${months[array[1]]} ${array[2]}${suffix}, ${array[0]}`
   return newData
};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/23"));
console.log(talkingCalendar("2006/05/21"));
*/
