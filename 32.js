// Task 32 = Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
// the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message 
// that the person will need to enter a new username. If a username has not been used, print a message saying that 
// the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["pakistan12", "jalees", "shahsb", "governorhouse", "its_me"];
let new_users = ["call_me_nomi", "iam_user", "jalees", "shahsb", "its_me"];
// Convert all usernames to lowercase for case-insensitive comparison
let lowercase_current_users = current_users.map(user => user.toLowerCase());
for (let i in new_users) {
    let new_username = new_users[i].toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (lowercase_current_users.includes(new_username)) {
        console.log("Sorry, " + new_users[i] + " is not available. You'll need to enter a new username.");
    }
    else {
        console.log("Congratulations! " + new_users[i] + " is available.");
        // Add the new username to the list of current users
        current_users.push(new_users[i]);
        lowercase_current_users.push(new_username);
    }
}
export {};
