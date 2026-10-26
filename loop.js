let techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

for (let i = 0; i < techstack.length; i++) {
    // console.log('Normal for: ' + techstack[i]);
}

for (let tech of techstack) {
    // console.log('For...of: ' + tech);
}

let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in obj) {
    console.log(key + ': ' + obj[key]);
}

// forEach loop
techstack.forEach(function(tech) {
    console.log('forEach: ' + tech);
});

// map loop
let techstackUpper = techstack.map(function(tech) {
    return tech.toUpperCase();
}); 

// console.log('map: ' + techstackUpper);

// filter loop
let filteredTech = techstack.filter(function(tech) {
    return tech.length > 4;
});

// console.log('filter: ' + filteredTech);  

// reduce loop
let techstackString = techstack.reduce(function(accumulator, currentValue) {
    return accumulator + ', ' + currentValue;
}, 'Tech Stack: ');

// console.log('reduce: ' + techstackString);

// some loop
let hasReact = techstack.some(function(tech) {
    return tech === 'React';
});

// console.log('some: ' + hasReact);    

// every loop   
let allHaveJS = techstack.every(function(tech) {
    return tech.includes('JS') || tech === 'JavaScript';
});

// console.log('every: ' + allHaveJS);

// find loop
let foundTech = techstack.find(function(tech) {
    return tech.length > 4;
}); 

// console.log('find: ' + foundTech);   

// findIndex loop
let foundIndex = techstack.findIndex(function(tech) {
    return tech.length > 4;
}); 

// console.log('findIndex: ' + foundIndex);

// entries loop
let techstackEntries = techstack.entries(); 

for (let [index, tech] of techstackEntries) {
    // console.log('entries: ' + index + ': ' + tech);
}

// keys loop
let techstackKeys = techstack.keys();   

for (let key of techstackKeys) {
    // console.log('keys: ' + key);
}

// values loop
let techstackValues = techstack.values();

for (let value of techstackValues) {
    // console.log('values: ' + value);
}

