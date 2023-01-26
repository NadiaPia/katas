
const makeCase = function(input, exp) {
    const inputArray = input.toLowerCase().split(' ');
    let updatedString = '';
    const vowel = ["a", "e", "i", "o", "u"]
    switch(exp) {
        case 'camel':            
            updatedString = inputArray[0];
            console.log('inputArray[0]', inputArray[0])
            for(let i = 1; i <= inputArray.length - 1; i++) {
                updatedString = updatedString + (inputArray[i][0].toUpperCase() + inputArray[i].slice(1, inputArray[i].length))  
            }
            return updatedString;    
        
        case 'pascal':                 
            for(let i = 0; i <= inputArray.length - 1; i++) {
                updatedString = updatedString + (inputArray[i][0].toUpperCase() + inputArray[i].slice(1, inputArray[i].length))  
            }
            return updatedString;
        
        case 'snake':
            return inputArray.join("_");

        case 'kebab':
            return inputArray.join("-");

        case 'title':           
            for(let i = 0; i <= inputArray.length - 1; i++) {
                updatedString = updatedString + (inputArray[i][0].toUpperCase() + inputArray[i].slice(1, inputArray[i].length) + (' '))  
            }
            return updatedString;
        
        case 'vowel':
           
            //const vowel = ["a", "e", "i", "o", "u"]
            for(let char of input) {
                if(vowel.includes(char)) {
                    char = char.toUpperCase()
                }
                updatedString = updatedString + char
            }
            return updatedString;

        case 'consonant':  
            for(let char of input) {
                if(!vowel.includes(char)) {
                    char = char.toUpperCase()
                }
                updatedString = updatedString + char
            }
            return updatedString;

        case ["upper", "snake"]:  
        return inputArray.join("_");
      
    }
}
//console.log(makeCase("this is a string", "camel"));
//console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
//console.log(makeCase("this is a string", "kebab"));
//console.log(makeCase("this is a string", "title"));
//console.log(makeCase("this is a string", "vowel"));
//console.log(makeCase("this is a string", "consonant")); //THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); //THIS_IS_A_STRING

