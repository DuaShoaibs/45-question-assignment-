//EXERCISE # 15:>
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestList = ["zainab", "zunaira", "laiba"];
var guestUnableToAttend = "zunaira";
console.log("".concat(guestUnableToAttend, " can't make it to the dinner."));
var newGuest = "dua";
var indexToRemove = guestList.indexOf(guestUnableToAttend);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, newGuest);
}
console.log("New invitations:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner. We would be honored to have your presence."));
}
