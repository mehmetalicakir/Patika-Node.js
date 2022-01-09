// Question: Print area of a circle with radius 5

const argument = process.argv.slice(2); //Get input from user

const r = argument[0];
console.log(Math.PI*r*r);
