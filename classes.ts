class Vehicle {
  //   drive(): void {
  //     console.log("chugga chugga");
  //   }

  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  // USE private to restrict access to this function, this does not increase security,
  //  it only restrict other developers to call this methods
  //  this private method only can be called by another method within the class
  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const car = new Car(4, "red");
car.startDrivingProcess();
// honk() cant be called outside because it is protected
car.honk();
