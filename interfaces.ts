interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink1 = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}gr of sugar`;
  },
};
//  Reusable interface
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink1);
