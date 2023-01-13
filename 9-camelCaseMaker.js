const camelCase = function(input) {
    const arr = input.split(' ');
    //console.log(arr);
    let camelCase = [];
    for(let i=0; i < arr.length; i++){
        let word = arr[i].toLowerCase();
        if(i !== 0) {            
            word = word[0].toUpperCase() + word.slice(1, word.lendth)        }
        camelCase.push(word)
        //console.log('word', word)
    }
    //console.log(camelCase)
    return camelCase.join('')
    

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*let word = "house"
word = word[0].toUpperCase() + word.slice(1, word.length)
console.log(word)*/