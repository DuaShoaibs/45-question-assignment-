//EXERCISE # 3:>

//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Dua";

// Person’s name in lowercase.
console.log("lowercase:", personName.toLowerCase());

// Person’s name in uppercase.
console.log("uppercase:", personName.toUpperCase());

// Person’s name in titlecase.
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
