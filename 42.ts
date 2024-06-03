// Task 42 = Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each
//  magician’s name. Call show_magicians() to see that the list has actually been modified.


function show_magicians(magician:string[]):void {
    for (let i in  magicians_names) {
        console.log(magicians_names[i]);
    }
}
let magicians_names:string[] = ['anas', 'philips', 'Mark', 'juile'];

function make_great(magicians:string[]):void{
    for(let i in magicians_names){
        magicians_names[i] = "You are great " +magicians_names[i];
    }
}

make_great(magicians_names)
show_magicians(magicians_names);

