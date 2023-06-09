const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};
// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["green", false, 0];

//  Tuples not used often
const carSpecs: [number, number] = [400, 3354]; // hard to read code

// This is clearer, easier to understand
const carStates = {
  horsePower: 400,
  weight: 3354,
};
