const pname = ['John', 'Jane', 'Doe'];
const age = [25, 30, 22];

// Accessing elements in the arrays
console.log(pname[0]); // Output: John
console.log(age[1]);  // Output: 30 

// Adding elements to the arrays
pname.push('Alice');
age.push(28);

// Removing elements from the arrays
pname.pop();
age.shift();
console.log(pname); // Output: ['John', 'Jane']
console.log(age);   // Output: [30, 22]


