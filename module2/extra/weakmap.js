// Creating a WeakMap
const weakMap = new WeakMap();

// Creating objects to be used as keys
let employee1 = {ID: 55968};
let employee2 = {ID: 54881};

// Setting values associated with the objects
weakMap.set(employee1, 'Name: Paul');
weakMap.set(employee2, 'Name: Ben');

// Getting values associated with the objects
console.log(weakMap.get(employee1)); // Output: value1
console.log(weakMap.get(employee2)); // Output: value2

employee1=null
console.log(weakMap.get(employee1)); // Output: value1
// Checking if the WeakMap has a key
console.log(weakMap.has(employee1)); // Output: true
console.log(weakMap.has(employee2)); // Output: true

// Deleting a key-value pair


let names = new set ('Mark' , 'Dave' , 'James' , 'Dan');

console.log(set)

