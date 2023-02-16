//a2 = b2 + c2 - 2bc·cos α

function isTriangle(a, b, c) {
    if((a + b) <= c) {
        return false;
    }
    if((b + c) <= a) {
        return false;
    }
    if((a + c) <= b) {
        return false;
    }
    return true;
   
}


console.log(isTriangle(1,2,2))
console.log(isTriangle(7,2,2))
