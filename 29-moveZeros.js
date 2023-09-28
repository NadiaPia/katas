function moveZeros(arr) {
    /*const newArr = [];
    let count = 0;
    
    arr.map((el) => {
        if(el === 0) {
            count = count + 1
        } else {
            newArr.push(el)
        }                
    });

    for(let i=0; i < count; i++) {
        newArr.push(0)
    }
    return newArr;*/

    //------------------------second way
    /*

    const arr1 = [];
    const arr2 = [];

    arr.map((el) => {
        if(el === 0) {
            arr2.push(el)
        } else {
            arr1.push(el)
        }
    })
    const arr3 = arr1.concat(arr2);
    return arr3;
    */

    return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0))
  }

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
  console.log(moveZeros([false,0,0,0,1,0,1,2,0,1,3,"a"]))
  console.log(moveZeros([0,0,0,0,2,2,2]))

