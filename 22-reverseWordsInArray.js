/*function reverseWords(str) {
    let arr = str.split(" ");
    let newArr = [];
    for(el of arr) {
       newArr.push(el.split("").reverse().join(""))
    }
    return newArr.join(' ')
    
}
*/

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
    
}


//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"

console.log(reverseWords("This is an example!"))
console.log(reverseWords("double  spaces"))
console.log(reverseWords("double   spaces"))


