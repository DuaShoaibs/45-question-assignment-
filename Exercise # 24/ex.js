//EXERCISE # 24:>
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
var city = 'New York';
console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');
console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles');
var fruit = 'Apple';
console.log("Is fruit.toLowerCase() == 'apple'? I predict True.");
console.log(fruit.toLowerCase() == 'apple');
var num = 10;
console.log("Is num == 10? I predict True.");
console.log(num == 10);
console.log("Is num != 5? I predict True.");
console.log(num != 5);
console.log("Is num > 5? I predict True.");
console.log(num > 5);
console.log("Is num < 20? I predict True.");
console.log(num < 20);
console.log("Is num >= 10? I predict True.");
console.log(num >= 10);
console.log("Is num <= 15? I predict True.");
console.log(num <= 15);
var age = 25;
console.log("Is age > 18 and age < 30? I predict True.");
console.log(age > 18 && age < 30);
console.log("Is age > 30 or age < 20? I predict True.");
console.log(age > 30 || age < 20);
var colors = ['red', 'green', 'blue'];
console.log("Is 'red' in colors? I predict True.");
console.log(colors.includes('red'));
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));
