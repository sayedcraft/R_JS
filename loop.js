let techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

for (let i = 0; i < techstack.length; i++) {
    console.log('Normal for: ' + techstack[i]);
}

for (let tech of techstack) {
    console.log('For...of: ' + tech);
}