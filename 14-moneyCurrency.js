const calculateChange = function(total, cash) {
    let giveBack = cash - total;
    
    const nominal = {
        'twentyDollars': 2000,
        'tenDollars': 1000,
        'fiveDollars': 500,
        'twoDollar': 200,
        'oneDollar': 100,
        'quarter': 25,        
        'dime': 10,
        'nickel': 5,
        'penny': 1
    }
    //let count = '';
    let count = {};
    for(const currency in nominal) {        
        if( giveBack >= nominal[currency] ) {
            let a = Math.floor(giveBack/nominal[currency])
            giveBack = giveBack - a * nominal[currency]            
            count[currency] = a
        }
    }    
    return count

  };
  
  console.log(calculateChange(1787, 2000));
  console.log(calculateChange(2623, 4000));
  console.log(calculateChange(501, 1000));
