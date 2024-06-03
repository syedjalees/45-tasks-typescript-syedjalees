// Task 15 = Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the
//  name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the 
// new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


let guest_list:string[]=["Governor sb","Sir Zia Khan","Daniyal Nagori sb"]
console.log("Governor sb can not join us at dinner table.");


let canNotCome:string = "Governor sb"
let unavailable_guest:number= guest_list.indexOf(canNotCome);

if(unavailable_guest === 0){
    guest_list[unavailable_guest]= "Sir Ameen";
}

for(let i=0; i<guest_list.length; i++){
    console.log("Respected",guest_list[i],"You are invited to Dinner.\nregards: \nSyed Jalees");
    
}

