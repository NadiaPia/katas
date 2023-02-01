/*function sumArray(array) {
    let min = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < array[0]) {
            min = array[i]
        }
    }
    return min


}*/

function sumArray(array) {
    let max = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > array[0]) {
            max = array[i]
        }
    }
    return max
}

//{ 6, 2, 1, 8, 10 } => 16

console.log(sumArray([6, 8, 10, 54]))