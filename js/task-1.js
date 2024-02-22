// function greet(name) {
//   return `Welcome ${name}!`;
// }
// console.log(greet("Mango"));
// console.log(greet);

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// const result = null;
// const pointer = null;


// console.log(makePizza(result));
// console.log(makePizza(pointer));

// console.log(makePizza);

function greet(name) {
  console.log(`Welcome ${name}!`);
}

function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}

registerGuest("Mango", greet); // "Registering Mango!"
															 // "Welcome Mango!"
registerGuest("Mango", notify); // "Registering Mango!"
																// "Dear Mango, your room will be ready in 30 minutes"