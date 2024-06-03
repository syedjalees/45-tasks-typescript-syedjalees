// Task 18 = Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.






let places_to_visit:string[] = [
    "London",
    "Sheeraz",
    "Islamabad",
    "Isfahan",
    "Baku"
]
console.log("Original Array: " + places_to_visit); // not in alphabetical order;

console.log("Alphabetical order: " +places_to_visit.sort());// Alphabetical order
console.log(places_to_visit);


console.log("reverse Alphabetical: "+places_to_visit.sort().reverse());// reverse in alphabetical order
console.log(places_to_visit);


console.log("reverse order: " +places_to_visit.reverse()); // reversed order
console.log(places_to_visit);

console.log("reverse as original: "+places_to_visit.reverse()); // reverse again
console.log(places_to_visit);


console.log("sorting to alphaetical order: " + places_to_visit.sort());//sorting for alphabetical order
console.log(places_to_visit);// printing it


console.log("Reverse Alphabetical: " + places_to_visit.sort().reverse());
console.log(places_to_visit);//printing it to show the order of list has changed


