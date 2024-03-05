//EXERCISE # 17:>

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
let guestList: string[] = ["zainab", "zunaira", "laiba", "sana", "ifra", "mirha", "dua"];

console.log("Sorry, we can only invite two people for dinner.");

while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for (let guest of guestList) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

guestList.pop();
guestList.pop();

console.log("Updated guest list:", guestList);
