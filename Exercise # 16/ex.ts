//EXERCISE # 16:>

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Original guest list
let guestList: string[] = ["zainab", "zunaira", "laiba"];

//Inform about the bigger dinner table
console.log("Good news! We found a bigger dinner table!");

//Add new guests
let newGuests: string[] = ["dua", "mirha"];
guestList.unshift("sana"); // Add one new guest to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, ...newGuests); // Add one new guest to the middle

// Step 3: Use push to add one new guest to the end of the list
guestList.push("ifra");

// Step 4: Print new invitation messages
console.log("New invitations:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
}
