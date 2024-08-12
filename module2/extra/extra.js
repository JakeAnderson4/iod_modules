
/*const basketballGame = {
    score: 0,
    freeThrow() {
      console.log(`Free Throw action: ${this.score}`);
      this.score ++;
      console.log(`After free Throw action: ${this.score}`);
      return this;
    },
    basket() {
      console.log(`Basket action: ${this.score}`);
      this.score += 2;
      console.log(`After Basket action: ${this.score}`);
      return this;
    },
    threePointer() {
      console.log(`Three Pointer action: ${this.score}`);
      this.score += 3;
      console.log(`After Three Pointer action: ${this.score}`);
      return this;
    },
    halfTime() {
      console.log("Halftime score is " + this.score);
      return this;
    },
  };
  */
  const basketballGame = {
    score: 0,
    foul: 0,
    freeThrow() {
      console.log(`Free Throw action: ${this.score}`);
      this.score ++;
      console.log(`After free Throw action: ${this.score}`);
      return this;
    },
    makeFoul(){
      this.foul ++;
      return this;
    },
    basket() {
      console.log(`Basket action: ${this.score}`);
      this.score += 2;
      console.log(`After Basket action: ${this.score}`);
      return this;
    },
    threePointer() {
      console.log(`Three Pointer action: ${this.score}`);
      this.score += 3;
      console.log(`After Three Pointer action: ${this.score}`);
      return this;
    },
    halfTime() {
      console.log(`Halftime score is ${this.score} and with  ${this.foul} foul`);
      return this;
    },
    fulltime() {
      console.log(`Final score is  ${this.score} and with  ${this.foul} foul`);
      return this;
    }
  };
  //modify each of the above object methods to enable function chaining as below:
  console.log(basketballGame
  .basket().freeThrow().freeThrow().basket().makeFoul().threePointer().makeFoul().halfTime() //Game 1
  .basket().freeThrow().makeFoul().freeThrow().basket().threePointer().halfTime().makeFoul() //Game 2
  .fulltime()
  ); //Show the final score
  
  
  
  
  //1
  //let number = 10;
  //let result;
  
  if (number > 0) {
    result = "Positive";
  } else {
    result = "Negative or Zero";
  }
  
  //answer
  let number = 10;
  let result = number > 0 ? "Positive" : "Negative or Zero"
  
  console.log(result)
  
  //2
  //let score = 85;
  //let grade;
  
  
  if (score >= 90) {
    grade = 'A';
  } else if (score >= 80) {
    grade = 'B';
  } else if (score >= 70) {
    grade = 'C';
  } else {
    grade = 'D';
  }
  
  let score = 85;
  let grade = score > 85 ? "Grade A" : "Grade B"
  
  /*
  let score = 85;
  let grade = score >= 90 ? 'A' : 
  (score >= 80 ? 'B' : 
  (score >= 70 ? 'C' :
   'D'));
  */
  
  
  
  
  3.
  function getDiscount(price) {
    let discount;
  
    if (price > 100) {
      discount = 10;
    } else {
      discount = 5;
    }
  
    return discount;
  }
  
  //let car1 = new Car('Toyota', 'Corolla', 2020);
  //let car2 = new Car('Honda', 'Civic', 2018);
  
  //Make a new Car object using constructor accepting all the properties. 
  //The constructor should have a function displayInfo to show year, make and model. E.g console.log(car1.displayInfo()); // Output: 2020 Toyota Corolla

  class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    displayInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let car1 = new Car('Toyota' , 'Corolla', 2020);
let car2 = new Car('Honda' , 'civic' , 2018);

console.log(car1.displayInfo()); // Output: 2020 Toyota Corolla
console.log(car2.displayInfo()); // Output: 2018 Honda Civic




let product1 = new Product('Laptop', 1200, 50);
let product2 = new Product('Phone', 800, 30);

function product {
    constructor(item, price, stock) {
    this.item = phone;
    this.price = 1000;
    this.stock = 35;

    this.sell = function(quantity) {
        if (this.stock >= quantity) {
            this.stock = this.stock - quantity;
            return 
        }
    }
    }
}
//Make a new Product object using constructor accepting all the properties.  The constructor should have a function sell, which follows by

//sell(quantity): A function that takes a single argument, quantity, which is the number of units to be sold. It performs the following actions:
//Checks if the available stock is sufficient to fulfill the requested sale quantity.
//If there is enough stock, it deducts the sold quantity from the stock and returns a message indicating the number of units sold and the remaining stock.
//If there is not enough stock, it returns a message indicating the inability to fulfill the sale and displays the remaining stock.

E.g 
console.log(product1.sell(10)); // Output: 10 Laptop(s) sold. Remaining stock: 40
console.log(product1.sell(45)); // Output: Not enough stock to sell 45 Laptop(s). Remaining stock: 40


// 5 Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same.

function getGreeting(name) {
  return 'Hello ' + name + '!';
  }

  const getGreeting = (name) => `hello ${name}!`;
  console.log(getGreeting('John'));
  



//7
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
  greeting(person) {
  let greeting = `Hello ${person.name}, my name is ${this.firstName}. `;
  console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
  return 'Nice to meet you.';
  }
  }
  inigo.greeting(westley)
  inigo.greeting(rugen)


    //__________________________________________________________________________________________________________________________________________________________________________________random


  