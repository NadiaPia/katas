/*function openOrSenior(data){
    let resArr = [];
    for(arr of data) {
        if(arr[0] >= 55 && arr[1] > 7) {
            resArr.push("Senior")
        } else {
            resArr.push("Open")
        }
    }
    return resArr;
}*/

function openOrSenior(data){
    let resArr = [];
    
    for(arr of data) {
        let y = arr[0] >= 55 && arr[1] > 7;
        
        resArr.push(y? "Senior" : "Open")
    }
    return resArr;
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]))

