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


/*Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.

b) Write another variant of the truncate function that uses a conditional operator.

console.log(truncate('This text will be truncated if it is too long', 25))

// This text will be truncat... */


function truncate(str, max, ending = '...'){
    if (str.length > max) {
        return str.slice(0, max - ending.length) + ending;
    } else {
        return str;
    }
}

let longString = "Hamid is GOAT and is the direct descendant of the JS Gods";
let shortString = "Hamid is GOAT an"
console.log(truncate(longString, 16));
console.log(truncate(shortString, 16));