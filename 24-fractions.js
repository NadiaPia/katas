
function SeriesSum(n) {
    if(typeof n !== 'number') {
        return "NaN";
    };
    let count = 0;
    
   
    for(let i = 0; i<= n - 1; i++) {
        count = count + 1 / (1 + (i * 3));
    }
    return  (Math.round(count * 100) / 100).toFixed(2).toString();

  }
  
  console.log(SeriesSum(0))  
  console.log(SeriesSum(1))
  console.log(SeriesSum(2))
  console.log(SeriesSum(3))
  console.log(SeriesSum(4))
  console.log(SeriesSum(5))
  console.log(SeriesSum('1.68'))






//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

