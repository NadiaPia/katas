/*function sumArray(array) {
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < array[0]) {
            min = array[i]
        }
    }
    return min


}*/

/*
function sumArray(array) {
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > array[0]) {
            max = array[i]
        }
    }
    return max
}



console.log(sumArray([6, 8, 10, 54]))

*/

const findElement = function(array) {
    let min = Math.min(...array);
    return min
     
}

console.log(findElement([4, 6, 8, 10, 54]))
