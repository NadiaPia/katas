const sumArray = (array) => {
    if(!array) {
        return 0
    }
    let sum = 0;
    let min = array[0];
    let max = array[0];
    for (const num of array) {
        sum = sum + num;
        if (num < min) min = num;
        if (num > max) max = num;
    }
    return (sum - max - min) || 0;
};


/*
function sumArray(array) {
    if(!array) {
        return 0
    }
    const min = Math.min(...array);
    const max = Math.max(...array);
    let counter = 0;
    
   for(let el of array) {
    counter = counter + el
   }
   let res = counter - min - max;
   if(res) {
       return res
   } else {
    return 0
   }
}*/



/*
function sumArray(array) {
    if(!array) {
        return 0
    }
   array.sort(function(a, b){return a-b});
   let newArr = array.slice(1, array.length - 1);
   let counter = 0;
   
   for(let el of newArr) {
    counter = counter + el;
   }
   return counter;
  }
  */
console.log(sumArray([6, 2, 1, 8, 10]))
console.log(sumArray(null))
console.log(sumArray([]))



//const points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return b-a});