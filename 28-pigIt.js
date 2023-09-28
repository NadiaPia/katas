function pigIt(str){
    /*let newArr = [];
    const punc = ["!", ",", "-", "?", "/" ];

    const arr = str.split(" ");
    arr.map((el) => {
        if(!punc.includes(el)) {
            const newWord = el.slice(1) + el[0] + "ay";        
        newArr.push(newWord)
        } else {
            newArr.push(el)
        }        
    })
    
    const newStr = newArr.join(" ")
    return(newStr);
    */

    return str.replace(/\w+/g, (p) => { // \w - alphanumeric caracter, + any number of caracters in a row, g - find all accurances
        return p.slice(1) + p[0] + 'ay';
      });

      /**/
}


console.log(pigIt("Pig latin is cool"))
console.log(pigIt("Hello world !"))
console.log(pigIt("Pig latin , is cool"))




