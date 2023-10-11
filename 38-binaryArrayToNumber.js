/*
const binaryArrayToNumber = (arr) => {
    arr.reverse();
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {       
        arr[i] > 0 ? count = count + Math.pow(2, i) : count = count
    }
    return count;

}*/

//second way:

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

console.log(binaryArrayToNumber([0,1,1,0]));
console.log(binaryArrayToNumber([1,1,1,1]));
console.log(binaryArrayToNumber([0,0,1,0]));



/*Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
*/

//const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)
//console.log(parseInt(" 10 01")) //10
const arr = [0,0,1,0];
const str = arr.join('');
//console.log("str", str)
//console.log("parseInt(0010)", parseInt("0010"))
const int = parseInt("0110", 2)
console.log(int)
//console.log("parseInt(0010), 2", parseInt("0010"), 2)
