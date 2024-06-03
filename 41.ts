// Task 41 = Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.



function show_magicians(magician:string[]):void {
    for (let i in  magicians_names) {
        console.log(magicians_names[i]);
    }
}

let magicians_names:string[] = ['anas', 'philips', 'Mark', 'juile'];
show_magicians(magicians_names);