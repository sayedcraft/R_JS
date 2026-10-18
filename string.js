let firstName = "Safayet";
let lastName = "Islam"; 

let fullName = firstName + " " + lastName; // Concatenation
let fullName2 = `${firstName} ${lastName}`; // Template Literal

log(fullName); // Output: Safayet Islam
log(fullName2); // Output: Safayet Islam

let withaddress = `${firstName} ${lastName} lives in Dhaka, Bangladesh.`;

log(withaddress); // Output: Safayet Islam lives in Dhaka, Bangladesh.

// ----------------------------------------------------

let rendomstring= "I am a Student.";


console.log(rendomstring.length); // Output: 15
console.log(rendomstring.toUpperCase()); // Output: I AM A STUDENT.
console.log(rendomstring.toLowerCase()); // Output: i am a student.
console.log(rendomstring.includes("Student")); // Output: true
console.log(rendomstring.startsWith("I am")); // Output: true
console.log(rendomstring.endsWith("Student.")); // Output: true
console.log(rendomstring.replace("Student", "Teacher")); // Output: I am a Teacher.
console.log(rendomstring.split(" ")); // Output: [ 'I', 'am', 'a', 'Student.' ]
console.log(rendomstring.charAt(0)); // Output: I
console.log(rendomstring.indexOf("Student")); // Output: 7
console.log(rendomstring.lastIndexOf("a")); // Output: 5
console.log(rendomstring.trim()); // Output: I am a Student.
console.log(rendomstring.repeat(3)); // Output: I am a Student.I am a Student.I am a Student.
console.log(rendomstring.slice(2, 5)); // Output: am
console.log(rendomstring.substring(2, 5)); // Output: am
console.log(rendomstring.padStart(20, "*")); // Output: *****I am a Student.
console.log(rendomstring.padEnd(20, "*")); // Output: I am a Student.*****
