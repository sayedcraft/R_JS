// Input from terminal

const num1= process.argv[2];
const num2= process.argv[3];

const sum= parseFloat(num1) + parseFloat(num2);

console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

// node inputFromTer.js 100 ooo
// The sum of 100 and ooo is: NaN

// node inputFromTer.js 100 500
// The sum of 100 and 500 is: 600
