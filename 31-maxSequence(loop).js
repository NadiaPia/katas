var maxSequence = function(arr) {
    let maxArr = [];
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        for(let k = i + 1; k <= arr.length; k++) {
            const subArr = arr.slice(i, k);
            let sum = 0;
            subArr.map((el) => {
                sum = sum + el;
            })
            //const sum = subArr.reduce((acc, el) => acc + el, 0)
            if (sum > maxSum) {
                maxArr = subArr;
                maxSum = sum;
            };
        }
    } 
    return `${maxSum}:${maxArr}`;    
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-1, -1, -1, -5]));
console.log(maxSequence([]));




