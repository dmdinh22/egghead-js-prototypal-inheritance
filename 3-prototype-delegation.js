function Car(make) {
    this.make = make;
    this.wheels = 1;
}

const myCar = new Car('Ford');

console.log(myCar); // Car { make: 'Ford', wheels: 1 }
