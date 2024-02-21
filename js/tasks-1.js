// 1)  //function getProductPrice(productName) {
//const products = [
   // { name: "Radar", price: 1300, quantity: 4 },
   // { name: "Scanner", price: 2700, quantity: 3 },
   // { name: "Droid", price: 400, quantity: 7 },
    //{ name: "Grip", price: 1200, quantity: 9 },
  //];

       //for (const item of products) {
       //    if (item.name === productName)
        //       return item.price;
       //}
      //return null;  
//}



 //console.log(getProductPrice("Radar"));// 1300.
 //console.log(getProductPrice("Grip") );// 1200.
 //console.log(getProductPrice("Scanner"));// 2700.
 //console.log(getProductPrice("Droid"));//400.
 //console.log(getProductPrice("Engine"));// null.
 
//2)//function getAllPropValues(propName) {
//    const products = [
//        { name: "Radar", price: 1300, quantity: 4 },
//        { name: "Scanner", price: 2700, quantity: 3 },
//        { name: "Droid", price: 400, quantity: 7 },
//        { name: "Grip", price: 1200, quantity: 9 },
 //   ];
 
//    const res = []; // Объявляем массив с результатами
//    products.forEach((item) => { // Бежим по массиву данных
//        if (item.hasOwnProperty(propName)) { // Проверяем у элемента наличие ключа
//            res.push(item[propName]) // Если есть добавляем к результату
//        }
//    })
//    return res; // Отдаем ответ
//}




// console.log(getAllPropValues("name"));//["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity"));// [4, 3, 7, 9]
// console.log(getAllPropValues("price"));//[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category"));// []

//  function calculateTotalPrice(productName) {
//  const products = [
 //   { name: "Radar", price: 1300, quantity: 4 },
//    { name: "Scanner", price: 2700, quantity: 3 },
//    { name: "Droid", price: 400, quantity: 7 },
//    { name: "Grip", price: 1200, quantity: 9 },
//  ];
 //    const res = []; // 
//      products.forEach((item) => { // Бежим по массиву данных
 //       if (item.hasOwnProperty(propName)) { // Проверяем у элемента наличие ключа
//            res.push(item[propName.price]) // Если есть добавляем к результату
//          }
//          
//    })
 //   return res; // Отдаем ответ
//}
    
  






 //console.log(calculateTotalPrice("Blaster"));// "Product Blaster not found!"
//console.log(calculateTotalPrice("Radar"));//5200
//console.log(calculateTotalPrice("Droid"));// 2800
//console.log(calculateTotalPrice("Grip"));// 10800
//console.log(calculateTotalPrice("Scanner"));//8100


// function isEnoughCapacity(products, containerSize) {
    
//     let sum = 0;
//     const values = Object.values(products);
//     for (const item of values) {
//         sum += item;
//     }
//     if (sum <= containerSize) {
//         return true;
//     } else {
//         return false;
//     }
// }


// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));// true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));// false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));// true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); //false


//   const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const item of products)
//     if (item.name === productName)
//       return item.price;
//   return null;
// }

// console.log(getProductPrice("Droid"));
//        const days = [
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//    ]
     
// function calcAverageCalories(obj) {
//   let total = 0;
//   const values = Object.values(obj.calories);

  
//  const days = [
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ]
 
  
// function calcAverageCalories(obj,calories) {
 
//   let total = 0;
//   for (let item of obj) {
//     if (item.calories === calories) {
      
//     }
//    total += item.calories/7;
//   }
//   return total;
// }
  


//  console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
//  ); // 3180

  

// const fruits = [
//   { name: "apple", price: 200 },
//   { name: "orange", price: 300 },
//   { name: "grapes", price: 750 }
// ];
// function uptFruits(array) {
//   const newArray = [];
//   let id = 1;
//   for (let fruit of array) {
//     fruit.price *= 0.8;
//     fruit.id = id; 
//     id += 1; 
//   }
//   newArray.push(fruits);
//   return newArray;
  
// }

// console.log(uptFruits(fruits));
  


// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };

// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"

// 2)
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };
// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"

// 3)
//   obj.atTheOldToad(){
//  console.log (potions[]);
// }
// getPotions(){return "List of all available potions";};
// addPotion(potionName){return Adding ${potionName}";}



//  atTheOldToad.getPotions();// "List of all available potions"

//  atTheOldToad.addPotion("Invisibility");//"Adding Invisibility"
// atTheOldToad.addPotion("Power potion");//"Adding Power potion"
4;


const profile = {
  username: "Jacob",
  playTime: 300,
},
 const = getInfo()
  

  
  
 console.log(getInfo());






//  info : Fnfo(){
//     return ${this.username} has ${this.playTime} active hours!;
//   },
// };


// console.log(profile.getInfo());

// this.username = `Marco`;
// profile.changeUsername("Marco");
// return `Marco`;
// console.log(profile.changeUsername);

// profile.getInfo();
// return `${this.username} has ${playTime} active hours!`;
// console.log(profile.getInfo());

// this.playTime = 20;
// profile.updatePlayTime(20);
// console.log(profile.updatePlayTime());

// profile.getInfo();
// return `${this.username} has ${playTime + this.playTime} active hours!`; 
// console.log(profile.getInfo()); 