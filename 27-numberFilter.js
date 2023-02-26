function filter_list(l) {
    const array = l.filter(el => typeof el !== "string" )
    return array
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))
