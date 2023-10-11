function findDifference(a, b) {
    function findMultuply(arr) {    
        return arr.reduce((acc, el) => acc * el, 1);
    };

    return Math.abs(findMultuply(a) - findMultuply(b));
}

console.log(findDifference([1, 4, 4], [3, 2, 5]));
console.log(findDifference([9, 7, 2], [5, 2, 2]));




