// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
 
  
//     const key = Object.keys(products);
//   return key;
// }


//  getAllPropValues("name");//["Radar", "Scanner", "Droid", "Grip"]
//  getAllPropValues("quantity");// [4, 3, 7, 9]
//  getAllPropValues("price");//[1300, 2700, 400, 1200]
//  getAllPropValues("category");// []

// const profile = {
//   username: "Jacob",
//   playTime: 300
// }

// //  console.log(profile);
// let Info = function () {
//   return "thet.username has thet.playTime active hours!"
// }
// // console.log(Info);



// calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// function calcAverageCalories(days) {
//     let totalCalories = 0;
//     for (let key in days) {
//         let day = days[key];
//         totalCalories += day.calories / 7;
        
//     }
//     return totalCalories;
// }

//   console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0


const profile = {
    username: "Jacob",
    playTime: 300,
    getInfo() {
         return `${this.username} has ${this.playTime} active hours!`
    },
};
 profile.getInfo();
console.log(profile.getInfo());

this.username = "Marco";
profile.changeUsername();

console.log(profile.getInfo());

 this.playTime = this.playTime + 20; 

console.log(profile.getInfo());

 











// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"