//EXERCISE # 21:>

//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car1: { make: string, model: string, year: number } = { make: "Toyota", model: "Camry", year: 2022 };
let car2: { make: string, model: string, year: number } = { make: "Honda", model: "Civic", year: 2021 };
let car3: { make: string, model: string, year: number } = { make: "Ford", model: "Fusion", year: 2020 };

console.log("Car 1:");
console.log(`Make: ${car1.make}, Model: ${car1.model}, Year: ${car1.year}`);

console.log("\nCar 2:");
console.log(`Make: ${car2.make}, Model: ${car2.model}, Year: ${car2.year}`);

console.log("\nCar 3:");
console.log(`Make: ${car3.make}, Model: ${car3.model}, Year: ${car3.year}`);
