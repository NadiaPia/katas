const multiplicationTable = function(maxValue) {
    let res = '';
    for (let i = 1; i <= maxValue; i++) {
        for(let k = 1; k <= maxValue; k++) {
            const m = i * k;
            res = res + m + ' '
        }
        res = res + "\n"
    }
    return res
};
  
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
