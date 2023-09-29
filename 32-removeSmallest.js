// function removeSmallest(numbers) {    
//     const indMin = numbers.reduce((accum, el, i) => {
//         return el < numbers[accum] ? i : accum;
//     }, 0);
//     const arr2 = [...numbers]
//     arr2.splice(indMin, 1);
//     return arr2;
// }

function removeSmallest(numbers) {
    console.log("numbers before", numbers);

    numbers = numbers.slice();
    console.log("numbers", numbers);

    const min = Math.min(...numbers);
    console.log("min", min)
    numbers.splice(numbers.indexOf(min), 1);
    return numbers;
}

console.log(removeSmallest([5,3,2,4]))
