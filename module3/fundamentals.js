//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?

let three = 3 
let four = 4         // all in string values instead of numbers
let thirty = 30
 
//what is the value of the following expressions? 
let addition = three + four  //7
let multiplication = three * four //12
let division = three / four //0.75
let subtraction = three - four //-1
 
let lessThan1 = three < four //true 
let lessThan2 = thirty < four  //<==== false - four does not have the correct operation for greater than,
//let lessThan2 = thirty > four // true
console.log(lessThan2)

//Which of the following console.log messages will print? Why?

    if (0) console.log('#1 zero is true')  //did not print - as zero is considered a falsy value so it will not execute.
    if ("0") console.log('#2 zero is true')  //printed - as any string with a value in it is considered a truthy value, even if the value represents 0, it has a value inside the string. "" would not print as it is an empty value and will not execute.
    if (null) console.log('null is true')  //did not print - null is NOT considered a truthy value, (falsy value) so it will not execute.
    if (-1) console.log('negative is true')  //printed - any non zero number including negative is considered a truthy value, so it will execute.
    if (1) console.log('positive is true')  //printed - 1 is considered a truthy value in javascript, so it will execute.
 

//__________________________________________________________________________________________________________________________________________________________________________
    //Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
    let a = 2, b = 1; 
let result = `${a} + ${b} is `; 
 
if (a + b < 10) { 
  result += 'less than 10'; 
} else { 
  result += 'greater than 10'; 
}

console.log(result)

/*ternary operator

if (a < b) {
  return 'abc';
} else {
  return 'cde'
}

let result2 = a < b ? 'abc' : 'cde' ;
*/
//answer below:
result += (a + b < 10) ? "less than 10" : "greater than 10";
console.log(result);

// += a shortcut operator of either result being a greater, or the same value as (a + b < 10).    
// ? is the ternary operator for if, and the : is the else statement.

//________________________________________________________________________________________________________________________________________________________________________


//Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
    return 'Hello ' + name + '!';
  }

 
 console.log(getGreeting('Jake'));
   
  //_______________________________
  
  getGreeting = (name) => {
    return 'Hello ' + name + '!';
  }
console.log(getGreeting('Bob'));


console.log(getGreeting('Jake')); // For function expression
console.log(getGreeting('Bob'));   // For arrow function


//Complete the inigo object by adding a lastName property and including it in the greeting- done
//Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console.- done

const westley = {
  name: 'Westley',
  numFingers: 5
  }
  const rugen = {
  name: 'Count Rugen',
  numFingers: 6
  }
  const inigo = {
  firstName: 'Inigo',
  lastName: 'Smith',
  greeting(person) {
  let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
  console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    if (person.numFingers === 6) {
  return 'You killed my father. Prepare to die.';
  } else {
    return 'Nice to meet you.';
  }
}
}
  inigo.greeting(westley),
  inigo.greeting(rugen)
  


































