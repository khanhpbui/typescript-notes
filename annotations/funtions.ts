const add = (a: number, b: number) => {
  return a + b;
};
// type inferrence automatically knows that the above func will return a number based on it's body
// but we shouldl always add that annotation in ": number" like below

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//  Use void to return 'no data' like 'undefined'.
const logger = (message: string): void => {
  console.log(message);
  return undefined;
};

// Never execute this function completely use 'never
const throwErr1 = (message: string): never => {
  throw new Error(message);
}; // But if func will return either a 'string' or possibly 'no data', we still annotate type string
const throwErr2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};
// Use void because we technically not returning anything and there's a CHANCE that we never reach the end of the function
const throwErr3 = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// Destructuring w/ annotation

// ex1:
const todaysWeather1 = {
  date: new Date(),
  weather: "sunny",
};
const logWeather1 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
logWeather1(todaysWeather1);

// ex2: 
const todaysWeather2 = {
    date: new Date(),
    weather: "sunny",
  };
//  ____________________DESTRUCTING__and(:)________ANNOTATION____________________
  const logWeather2 = ({date, weather}: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
  };
  logWeather2(todaysWeather2);