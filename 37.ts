// Task 37 = Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
// with a different message.

function make_shirt(size:string = "Large" , text:string = "I love Typescript"){
    console.log("your shirt's size is "+size+" and the text " +text+ " Printed on it");
}



// Make a large size shirt with the default message no arugument
make_shirt();

// a medium size shirt with the default message single argument
make_shirt("Medium");

// shirt of any size with a different message double arguments
make_shirt("Small", "JavaScript Rocks!");