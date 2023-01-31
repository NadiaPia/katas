
/*
const rps = (p1, p2) => {
    const getMsg = (n) => `Player ${n} won`

    let n = 0
  
    if(p1 === p2) {
        return "Draw!"
    }
    if(p1 === "paper" && p2 === "scissors") {
        n = 2
    }
    if(p1 === "paper" && p2 === "rock") {
        n = 1
    }
    if(p1 === "scissors" && p2 === "paper") {
        n = 1
    }
    if(p1 === "scissors" && p2 === "rock") {
        n = 2
    }
    if(p1 === "rock" && p2 === "paper") {
        n = 2
    }
    if(p1 === "rock" && p2 === "scissors") {
        n = 1
    }
    return getMsg(n) 
}*/

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";

    const rules = {
        rock: "scissors", 
        paper: "rock", 
        scissors: "paper"};

    if (rules[p1] === p2) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };




//rps("paper", "scissors")
//rps("paper", "rock")
//rps("scissors", "rock")
//rps("scissors", "paper")
//rps("rock", "scissors")
console.log(rps("rock", "paper"))
console.log(rps("rock", "rock"))

