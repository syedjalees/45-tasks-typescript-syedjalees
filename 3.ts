// Task3= Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let my_name: string = "syEd jalEEs akbaR"

console.log(my_name.toLowerCase());
console.log(my_name.toUpperCase());
console.log(my_name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()));

