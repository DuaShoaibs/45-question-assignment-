//EXERCISE # 19:>
//Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Guest List
var dinnerGuests = ["zainab", "zunaira", "laiba"];
// Print invitation message to each person
dinnerGuests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner."));
});
// Print the number of people invited to dinner
console.log("Total number of guests invited to dinner: ".concat(dinnerGuests.length));
