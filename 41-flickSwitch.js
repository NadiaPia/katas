function flickSwitch(arr) {

    let tag = true;
    const subArr = [];
    arr.map((el) => {
        subArr.push(el === 'flick' ? tag = !tag : tag = tag);
    })
  return subArr;

  /*let returning = true;
    return arr.map( (v) => {
      return (v === "flick") ? returning = !returning : returning;
    })*/
}

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars']));
console.log(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']));
console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));

/*
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
 */