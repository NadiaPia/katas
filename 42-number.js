function number (array) {
   
   return array.map((el, i) => `${i + 1}: ${el}`);

   //-----------another way--------------------

    /*let newArr = [];    
    for (let i = 0; i <= array.length-1; i++) {       
        newArr.push(`${i + 1}: ${array[i]}`);       
    }    
    return newArr;*/
      
}
console.log(number(["a", "b", "c"]));
console.log(number([]));





  /*[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"] */