// Task 27 = Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

import chalk from "chalk";

let alienColor1:string = "green";
let alienColor2:string = "yellow";
let alienColor3:string = "red";

if (alienColor1 === "green") {
    console.log(chalk.green("The Alein Green earned 5 points."));
    
}  if (alienColor2 === "yellow") {
    console.log(chalk.yellow("The Alein Yellow earned 10 points."));
}  if (alienColor3 === "red") {
    console.log(chalk.red("The Alein Red earned 15 points."));
}