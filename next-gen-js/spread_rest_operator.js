// Spread -> Used to split up array elements or object properties.
const numbers = [1, 2, 4];
const newNumbers = [...numbers, 4];
const wrongNewNumbers = [numbers, 4];

console.log(newNumbers);
console.log(wrongNewNumbers);

const person = {
    name: 'Dr. House'
};

const newPerson = {
    ...person,
    age: 50
};

console.log(person);
console.log(newPerson);

// Rest -> Used to merge a list of function arguments into an array.
const filter = (...args) => args.filter(element => element === 1);

console.log(filter(1, 2, 3));