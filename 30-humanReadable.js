// function humanReadable (seconds) {

//     function transformation (arg) {
//         let argStr = arg.toString();
//         argStr = argStr.length < 2 ? "0" + argStr : argStr;
//         return argStr;
//     };
    
//     let HH = Math.trunc(seconds / 3600);
//     let reminder =  seconds - (3600 * HH);
//     let MM = Math.trunc(reminder / 60);
//     let SS = reminder - (MM * 60);

//     const result = `${transformation(HH)}:${transformation(MM)}:${transformation(SS)}`
//     //console.log(typeof(result))
 
//     return (result);    
// }

// console.log(humanReadable(45296));
// console.log(humanReadable(90));
// console.log(humanReadable(0));
// console.log(humanReadable(120321));  


function humanReadable (seconds) {
    return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map((v) => {
        v = Math.trunc(v).toString();
        return v.length < 2 ? "0" + v : v
    }).join(":");
    
}
console.log(humanReadable(45296));
console.log(humanReadable(90));



