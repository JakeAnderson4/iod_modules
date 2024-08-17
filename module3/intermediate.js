//Create a function that takes a string as a parameter and returns the string with the first
//character of each word changed into a capital letter, as in the example below. Test it with
//different strings.


//console.log(ucFirstLetters("los angeles") ) //Los Angeles

//function expression method --------- function is being expressed 

function capitaliseWords(str) {    
    const words = str.split(" ");

for (let i = 0; i <words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
} 
return words.join(" ");
}

const mySentence = "monday is a drag.";
console.log(capitaliseWords(mySentence));



//function declaration --------- function is being declared anonymous, 


let capitaliseWords2 =  function(){
    const words = str.split(" ");

for (let i = 0; i <words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
} 
return words.join(" ");
}


console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...
