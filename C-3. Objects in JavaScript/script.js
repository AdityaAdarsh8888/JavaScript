const person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
};
console.log(person);
person.greet();



const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
console.log(car);