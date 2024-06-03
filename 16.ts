// Task 16 = More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.



let guest_list:string[]=["Governor sb","Sir Zia Khan","Daniyal Nagori sb"]

let canNotCome:string = "Governor sb"
let unavailable_guest:number= guest_list.indexOf(canNotCome);

if(unavailable_guest === 0){
    guest_list[unavailable_guest]= "Sir Ameen";
}
// task 16 started .
console.log("Hey I found A bigger Dinner Table"); // information for bigger dinner table
let new_guest1:number  = guest_list.unshift("Sir Qasim"); // add new guest in beggining of array

let new_guest2:string[] = guest_list.splice(2,0 , "Sir Okasha"); // add new guest in middle 

let new_guest3:number = guest_list.push("Sir Aneeq");// adding new guest in last of array


for(let i=0; i<guest_list.length; i++){
    console.log("Respected",guest_list[i],"You are invited to dinner at the bigger dinner table.\nregards: \nSyed Jalees");
    
}
