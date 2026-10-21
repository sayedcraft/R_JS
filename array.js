const pname = ['John', 'Jane', 'Doe'];
const age = [25, 30, 22];

// Accessing elements in the arrays
console.log(pname[0]); // Output: John
console.log(age[1]);  // Output: 30 

// Adding elements to the arrays
pname.push('Alice');
pname.unshift('Bob');
age.push(28);
age.unshift(35);
console.log(pname); // Output: ['Bob', 'John', 'Jane', 'Doe', 'Alice']
console.log(age);   // Output: [35, 25, 30, 22, 28]

// Removing elements from the arrays
pname.pop();
pname.shift();
age.shift();
age.pop();
console.log(pname); // Output: ['John', 'Jane', 'Doe']
console.log(age);   // Output: [25, 30]

// Finding the index of an element
const index = pname.indexOf('Jane');
console.log(index); // Output: 1

// Iterating over the arrays
pname.forEach((name, index) => {
    console.log(`Name at index ${index}: ${name}`);
});

age.forEach((a, index) => {
    console.log(`Age at index ${index}: ${a}`);
});

// Filtering the arrays
const adults = age.filter(a => a >= 30);
console.log(adults); // Output: [30]

// Mapping the arrays
const nameWithAge = pname.map((name, index) => `${name} is ${age[index]} years old`);
console.log(nameWithAge); // Output: ['John is 25 years old', 'Jane is 30 years old', 'Doe is 22 years old']

// Reducing the arrays
const totalAge = age.reduce((total, a) => total + a, 0);
console.log(totalAge); // Output: 77

// Finding the maximum age
const maxAge = Math.max(...age);
console.log(maxAge); // Output: 30

// Sorting the arrays
const sortedNames = [...pname].sort();
console.log(sortedNames); // Output: ['Doe', 'Jane', 'John']

const sortedAges = [...age].sort((a, b) => a - b);
console.log(sortedAges); // Output: [22, 25, 30]

// Finding the minimum age
const minAge = Math.min(...age);
console.log(minAge); // Output: 22

// Finding if an element exists in the array
const hasDoe = pname.includes('Doe');
console.log(hasDoe); // Output: true

// Finding the length of the arrays
console.log(pname.length); // Output: 3
console.log(age.length);   // Output: 3

// Creating a new array from existing arrays
const combined = pname.concat(age);
console.log(combined); // Output: ['John', 'Jane', 'Doe', 25, 30, 22]

// Creating a new array using the spread operator
const combinedSpread = [...pname, ...age];
console.log(combinedSpread); // Output: ['John', 'Jane', 'Doe', 25, 30, 22]

// Finding the first element that meets a condition
const firstAdult = age.find(a => a >= 30);
console.log(firstAdult); // Output: 30

// Finding the index of the first element that meets a condition
const firstAdultIndex = age.findIndex(a => a >= 30);
console.log(firstAdultIndex); // Output: 1

// Creating a new array with only unique elements
const uniqueAges = [...new Set(age)];
console.log(uniqueAges); // Output: [25, 30, 22]

// Reversing the arrays
const reversedNames = [...pname].reverse();
console.log(reversedNames); // Output: ['Doe', 'Jane', 'John']

// Finding the sum of ages using reduce
const sumOfAges = age.reduce((sum, a) => sum + a, 0);
console.log(sumOfAges); // Output: 77

// Finding the average age
const averageAge = sumOfAges / age.length;
console.log(averageAge); // Output: 25.666666666666668

// Finding the median age
const sortedAgeForMedian = [...age].sort((a, b) => a - b);
let medianAge;
const mid = Math.floor(sortedAgeForMedian.length / 2);
if (sortedAgeForMedian.length % 2 === 0) {
    medianAge = (sortedAgeForMedian[mid - 1] + sortedAgeForMedian[mid]) / 2;
}   else {
    medianAge = sortedAgeForMedian[mid];
} 
console.log(medianAge); // Output: 25






