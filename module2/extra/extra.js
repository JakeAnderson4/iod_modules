let three = 3 
let four = 4         // all in string values instead of numbers
let thirty = 4
 
//what is the value of the following expressions? 
let addition = three + four  //7
let multiplication = three * four //12
let division = three / four //0.75
let subtraction = three - four //-1
 
let lessThan1 = three < four //true
let lessThan2 = thirty < four  //<====  four does not have the correct operation for greater than,

console.log(lessThan2)



    if (0) console.log('#1 zero is true')  //did not print - as zero is considered a falsy value so it will not execute.
    if ("0") console.log('#2 zero is true')  //printed - as any string with a value in it is considered a truthy value, even if the value represents 0, it has a value inside the string. "" would not print as it is an empty value and will not execute.
    if (null) console.log('null is true')  //did not print - null is not considered a truthy value, (falsy value) so it will not execute.
    if (-1) console.log('negative is true')  //printed - any non zero number including negative is considered a truthy value, so it will execute.
    if (1) console.log('positive is true')  //printed - 1 is considered a truthy value in javascript, so it will execute.


    let a = 2, b = 1; 
let result = `${a} + ${b} is `; 
 
if (a + b < 10) { 
  result += 'less than 10'; 
} else { 
  result += 'greater than 10'; 
}

console.log(result)