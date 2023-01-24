const organizeInstructors = function(instructors) {
    let obj = {};

    for(el of instructors){   
        const newKey = !obj[el.course]
        if(newKey) {
            obj[el.course] = [el.name]
        } else {
            obj[el.course].push(el.name)

        }  
    }
    return obj
   
  };
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));
/*
let word = ['a']
word.push('b')
console.log(word)*/
