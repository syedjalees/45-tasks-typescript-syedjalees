// // Task 43 = Unchanged Magicians: Start with your work from Exercise 42. 
// // Call the function make_great() with a copy of the array of magicians’ names. 
// // Because the original array will be unchanged, return the new array and store it in a separate array. 
// // Call show_magicians() with each array to show that you have one array of the original names and one array with 
// // the Great added to each magician’s name.
function show_magicians(magician) {
    for (let i in magicians_names) {
        console.log(magicians_names[i]);
    }
}
function make_great(magicians) {
    for (let i in magicians_names) {
        magicians_names[i] = "You are great " + magicians_names[i];
    }
}
let magicians_names = ['anas', 'philips', 'Mark', 'juile'];
let great_magicians = make_great(magicians_names.slice()); // Pass a copy of the array
console.log("Original magicians:");
show_magicians(magicians_names);
console.log("\nGreat magicians:");
show_magicians(great_magicians);
export {};
