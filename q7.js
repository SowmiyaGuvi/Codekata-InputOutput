//Print the characters in a string separated by space.

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

    const str = userInput[0];
    const separatedChars = str.split('').join(' ');
    console.log(separatedChars);

  //end-here
});