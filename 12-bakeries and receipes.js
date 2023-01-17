const chooseRecipe = function() {
    //1. we get an ingredient from the recepies
    for(const recipe of recipes) {
        //2. take every ingredient as an argument for the ingredientCheck function
        const firstIngr = ingredientCheck(recipe.ingredients[0])
        const secondIngr = ingredientCheck(recipe.ingredients[1])
        if(firstIngr === "A" && secondIngr === "B") {
            return recipe.name
        }
        if(firstIngr === "B" && secondIngr === "A") {
            return recipe.name
        }
    }
}

const ingredientCheck = (ingr) => {    
    if(bakeryA.includes(ingr))
        return "A"
    if(bakeryB.includes(ingr))
        return "B"
    return null
}
  /*
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];



//console.log(chooseRecipe())
*/

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));