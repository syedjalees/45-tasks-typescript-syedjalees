// Task 17 = Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// have an empty list at the end of your program.
let guest_list = ["Uzair", "Rizwan", "Anas", "Zain", "Karim", "Kashif"]; // i make a new original list 
console.log("Sorry! the new dinner table won't arrive in time for the dinner, so we can't invite more than two peoples"); // statement
while (guest_list.length > 2) {
    let remove_guests = guest_list.pop(); // removing the guests more than two
    console.log("Sorry Dear " + remove_guests + " we can't invite you for dinner at this time"); // message guests letting them know that thy are not invited
}
console.log("\nguests which still i want at dinner table\n");
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear " + guest_list[i] + " \nYou are still invited to dinner at this time");
}
console.log("\nupdated list \n" + guest_list);
let empty_list = guest_list.slice(2); // using slice method to get a new empty array.
console.log(empty_list);
console.log("finally program to war gaya  ");
export {};
