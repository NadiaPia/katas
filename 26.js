function towerBuilder(nFloors) {
    const width = 1 + (2 * (nFloors - 1))
    let arr = [];
    for(let i = 0; i <= nFloors - 1; i++){
        const floor = []
        const starRepeat = 1 + (2 * i);
        const spaceRepeat = (width - starRepeat) / 2
       floor.push(' '.repeat(spaceRepeat))
       floor.push("*".repeat(starRepeat))
       floor.push(' '.repeat(spaceRepeat))
       arr.push(floor.join(""))

    }
    return arr;
  }
  console.log(towerBuilder(4))

 
/*
  let symbol = "*";
  let print = symbol.repeat(3)
  console.log(print)
  */

 /* for(let k = 1; k <= 50; k = k+2) {
      console.log(k)
}*/