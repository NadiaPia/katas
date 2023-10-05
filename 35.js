function returnNegative(num) {
    
    //return num <= 0? num : Number(-num.toString());
    return num <= 0? num : -num;

};

console.log(returnNegative(12));
console.log(returnNegative(0));
console.log(returnNegative(-9));

