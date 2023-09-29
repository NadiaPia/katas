function removeExclamationMarks(s) {
    //const newS = s.replace("!", "");
    //return s.replace("!", ""); //removes only first "!"
    return s.replace(/!/g, "");//removes "!" globally
}

console.log(removeExclamationMarks("Hello World!"));
console.log(removeExclamationMarks("He!llo! !World!"));
console.log(removeExclamationMarks("Hello World!!"));

