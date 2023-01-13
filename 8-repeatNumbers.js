const repeatNumbers = function(data) {
    data.map((el)=>{
        for(let i = 0; i < el[1]; i++ ) {
            console.log(el[0])
        }
    })
   
  };
  
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));