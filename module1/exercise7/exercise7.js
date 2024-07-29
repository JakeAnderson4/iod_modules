function add(a,b){
    console.log(a+b)
    return a+b  
    // this function is the addition/ plus operation to combine two values, which will then print the answered number. 
}



x=add(1,6)

function subtract(a,b){
    return a+b
}




console.log(subtract(2,3))

function name(name){
    console.log("Hello $(name)")
}

name('John')

function add(d,e){

}

function add (a, b)
{	
	if(Number.isInteger(a) || Number.isInteger(b))
	{
		throw new Error('Your inputs are invalid, they must be integer');
	}
	
	if(a === null || b === null)
	{
		throw new Error('Your inputs are missing');
	}
	
	return a + b;
}
//add(2,3) => 5
//add("$", 3) => "Your inputs are invalid, they must be integer"
//add(null, 3) => "Your inputs are missing"

if (add(2, 3) != 5) throw Error("Addition failed test #1")
    if (add(8, -4) != 4) throw Error("Addition failed test #2")
    if (add(397, 0) != 397) throw Error("Addition failed test #3")