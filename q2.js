//Print the integer list of integers separated by space

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

  // Get input from the user
    const input = userInput[0];

    // Print the input
    console.log(input);

  //end-here
});