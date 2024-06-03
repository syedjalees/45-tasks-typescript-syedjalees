// Task 24 = More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try 
// more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


let my_name:string = "jalees"
let your_name:string= "uzair"
let n1:number= 4;
let n2:number= 5;
let fruits:string[] = ["apple", "banana", "orange"];


// equality and inequality test with strings 
console.log("Is my_name == `jalees` ? i predict true");
console.log(my_name == "jalees");

console.log("Is my_name != jalees ? i predict false");
console.log(my_name == "uzair");

console.log("Is my_name != your_name ? i predict true");
console.log(my_name != your_name);

console.log("Is my_name == your_name ? i predict false");
console.log(my_name == your_name);


// Tests using the lower case function
console.log("Is my_name lowercase == 'jalees'? I predict True.");
console.log(my_name.toLowerCase() == "jalees");

console.log("Is my_name lowercase != 'jalees'? I predict false.");
console.log(my_name.toLowerCase()=="Jalees");


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// equality and inequality
console.log("Is n1 == 4? I predict true");
console.log(n1 == 4);

console.log("Is n1 != 4? I predict false");
console.log(n1 == n2);

// greater than and less than
console.log("Is n1 is greater than than n2? I predict false.");
console.log(n1 > n2); //false

// less than
console.log("Is n1 is less than n2? I predict True.");
console.log(n1 < n2); //true

// greater than or equal to and less than or equal to

console.log("Is n2 >= n1 ? i predict true");
console.log(n2 >= n1);

console.log("Is n2 <= n1? i predict false");
console.log(n2 <= n1);


// Tests using "and" and "or" operators

console.log("Is n1 < n2 and n2 > n1? i predict true");
console.log( n1 < n2 && n2 > n1);

console.log("Is n1 > n2 and n2 < n1  == ? i predict false");
console.log( n1 > n2 && n2 < n1);


console.log("Is n1 > n2 or n2 > n1? i predict true");
console.log( n1 > n2 || n2 > n1);

console.log("Is n1 > n2 or n2 < n1  == ? i predict false");
console.log( n1 > n2 || n2 < n1);


// Test whether an item is in a array
console.log("Is 'banana' in the fruits array? I predict true.");
console.log(fruits.includes('banana'));


// Test whether an item is not in a array
console.log("Is 'mango' not in the fruits array? I predict False.");
console.log(fruits.includes('mango'));



