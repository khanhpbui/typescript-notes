//  ANNOTAIONS
const carMakers2: string[] = [];
// INFERRENCE
const carMakers1 = ["chevy", "ford", "honda"];

const dates = [new Date(), new Date()];

// => const carsByMake: string[][] = [];
const carsByMake = [["camaro"], ["f150"], ["civic"]];

// HELP with INFERENCE when extracting values
const car = carMakers1[0]; //index access
const myCar = carMakers1.pop();

// PREVENT incompatible values
carMakers1.push(100);

// HELP with map(), forEach(), reduce()
carMakers1.map((car: string): string => {
  return car.toUpperCase();
});

// FLEXIBLE TYPES
const importantDates: (string | Date)[] = [];
importantDates.push("2023-05-05");
importantDates.push(new Date());
importantDates.push(100);


// SUMMARY:
// Use Typed Arrays when representing a collection of records (with some arbitrary sort order)