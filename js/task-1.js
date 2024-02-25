//  пример 1.
// function greet(name) {
//   return `Welcome ${name}!`;
// };
// console.log(greet("Mango"));//Welcome Mango!
// console.log(greet);//ƒ greet(name) {return `Welcome ${name}!`;

 //  пример 2.
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = null;
// const pointer = null;

// makePizza(0);
// makePizza(pointer);
// console.log(makePizza( result));//Your pizza is being prepared, please wait.

// console.log(makePizza);//ƒ makePizza() { return "Your pizza is being prepared, please wait.";};

// (пример 3)..

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }
// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }
// registerGuest("Mango", greet); // "Registering Mango!"
// 															 // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"// "Dear Mango, your room will be ready in 30 minutes"

// пример 3.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName,callback) {
//   return 
// }


// makeMessage("Royal Grand", makePizza);//"Pizza Royal Grand is being prepared, please wait..."
// makeMessage("Ultracheese", deliverPizza);//"Delivering Ultracheese pizza."