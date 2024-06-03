// Task 44 = Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different number
//  of arguments each time.

function Sandwiches(...items:string[]):void{
    console.log("Sandwich will make with following items: ");
    for(let i in items){
        console.log(items[i]);
    }
    
}

Sandwiches("bun","cheese","chicken","vegitables")
console.log("---------------------");

Sandwiches("dow","daal","egg")