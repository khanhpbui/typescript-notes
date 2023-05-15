let apple: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in obj
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, false, true];

// Classes
class Cart {}
let cart: Cart = new Cart();

//  Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// this is annotaion: ": (i:number) => void"
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotaions

//  1. Functions that returns the 'any' type like JSON.parse()
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//  2. When we declare a variable on 1 line and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; // declare its type to fix 'any'
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3. Variable whose type cannot be inferred correctly (this is not good practice code)
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // declare its types to fix 'any'
// numberAboveZero can either have a value of boolean or number
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
