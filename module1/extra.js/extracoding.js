1.
const jsonString = '[{"name":"Anna", "age":22}, {"name":"Bob", "age":30}, {"name":"Carol", "age":25}]';
//Task: Find and log people older than 24.

//Hint: Using JSON.parse
2.
const employees = [
  { "name": "John", "age": 30, "position": "Manager", "salary": 60000 },
  { "name": "Jane", "age": 25, "position": "Developer", "salary": 50000 },
  { "name": "Mark", "age": 35, "position": "Designer", "salary": 55000 },
  { "name": "Sara", "age": 28, "position": "Developer", "salary": 52000 }
];

//Filter the employees array to include only developers who earn more than $50,000.
3.
const salesData = [
  { "product": "Laptop", "quantity": 4, "price": 1000 },
  { "product": "Laptop", "quantity": 2, "price": 1000 },
  { "product": "Phone", "quantity": 10, "price": 500 },
  { "product": "Tablet", "quantity": 5, "price": 600 }
];

//Compute the total revenue for each product.











4.
const transactions = [
  { "id": 1, "type": "deposit", "amount": 100 },
  { "id": 2, "type": "withdrawal", "amount": 50 },
  { "id": 3, "type": "deposit", "amount": 200 },
  { "id": 4, "type": "withdrawal", "amount": 150 }
];


//- Write a function groupBy that takes an array of objects and a key, and returns an object where the keys are the values of the specified key and the values are arrays of objects.
//- Group the transactions array by the type key.

function groupBy(array, deposit){
    return array.reduce()
}
const groupedtransactions = groupBy(transactions, 'type');
console.log(groupedtransactions)


































function groupBy(array, key) {
    return array.reduce((result, currentValue) => {
      // Get the key value from the current object
      const keyValue = currentValue[key];
      
      // If the key value is not already in the result object, add it with an empty array
      if (!result[keyValue]) {
        result[keyValue] = [];
      }
      
      // Push the current object into the array for this key value
      result[keyValue].push(currentValue);
      
      // Return the result object for the next iteration
      return result;
    }, {}); // Initialize the result object as an empty object
  }
  
  const transactions = [
    { "id": 1, "type": "deposit", "amount": 100 },
    { "id": 2, "type": "withdrawal", "amount": 50 },
    { "id": 3, "type": "deposit", "amount": 200 },
    { "id": 4, "type": "withdrawal", "amount": 150 }
  ];
  
  const groupedTransactions = groupBy(transactions, "type");
  
  console.log(groupedTransactions);
  
  {
    "deposit": [
      { "id": 1, "type": "deposit", "amount": 100 },
      { "id": 3, "type": "deposit", "amount": 200 }
    ],
    "withdrawal": [
      { "id": 2, "type": "withdrawal", "amount": 50 },
      { "id": 4, "type": "withdrawal", "amount": 150 }
    ]
  }
  