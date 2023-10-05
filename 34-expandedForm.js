function expandedForm(num) {
    const arr = num.toString().split("");
    let result = '';
    for (let i = 0; i <= arr.length - 1; i++) {
        let zeroCount  = arr.length - i - 1;
        if(arr[i] === "0")  continue;        
        result = `${result}${arr[i]}${"0".repeat(zeroCount)} + `;       

    }
    return result.slice(0, -3);
    
};


console.log(expandedForm(70304));
console.log(expandedForm(12));


