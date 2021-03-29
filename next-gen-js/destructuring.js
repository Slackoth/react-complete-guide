// Easily extract array elements or object properties and store them in variables.
const numbers = [1, 2, 3];
const [one, two] = numbers;
const [,, three] = numbers;

console.log(one, two);
console.log(three);

const person = {
    name: 'Dr. House',
    age: 50
};

const {name , age} = person;

console.log(name, age);