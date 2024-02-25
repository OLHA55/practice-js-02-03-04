// const comments = [
//    {
//     id: 1,
//     authorName: 'Глеб Фильтеровский',
//     authorRating: 5404,
//     text: 'Присоединяюсь, из трех функций понял только filter!'
//   },
//   {
//     id: 2,
//     authorName: 'Иван Редьюсов',
//     authorRating: 348,
//     text: 'Используйте console.log для отладки и сами все поймете!'
//   },
//   {
//     id: 3,
//     authorName: 'Анна Мэп',
//     authorRating: 1892,
//     text: 'Посмотрите гайды на YouTube, там все объясняется.'
//   },
  
// ];


// // Вот так выглядит наша функция
//   const masNew = comments.map((comment) => comment.authorName);

// console.log(masNew);



// задача 1.

// const getUserNames = users => users.map((users) => users.name);
// console.log(
//   getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     balance: 2764
//   },
// ])
// );

  //Задача 2.
const getUserNames = users => users.map((users) => users.name);
const getUsersWithFriend = (users, friendName) => users.map(users,friendName) => users.friends ;
const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];
//const getUserNames = (users, friendName) => users.map((users) => users.name);
// const newUsers = allUsers.filter(item => item.name.includes(` ol`));
// console.log(newUsers);
// //console.log(users.friendName);


// const getUsersWithFriend = (users, friendName) => 

//   users.filter((user) => user.name.match(/console.log/));


// const comments = [
//    {
//     id: 1,
//     authorName: 'Глеб Фильтеровский',
//     authorRating: 5404,
//     text: 'Присоединяюсь, из трех функций понял только filter!'
//   },
//   {
//     id: 2,
//     authorName: 'Иван Редьюсов',
//     authorRating: 348,
//     text: 'Используйте console.log для отладки и сами все поймете!'
//   },
//   {
//     id: 3,
//     authorName: 'Анна Мэп',
//     authorRating: 1892,
//     text: 'Посмотрите гайды на YouTube, там все объясняется.'
//   },
//   {
//     id: 4,
//     authorName: 'Анна Мэп',
//     authorRating: 1892,
//     text: 'Кстати, использовать console.log — отличная идея!'
//   },
//   {
//     id: 5,
//     authorName: 'Иван Редьюсов',
//     authorRating: 348,
//     text: 'Если вы приложите ревью, нам будет проще вам помочь.'
//   },
// ];



// comments.filter((comment) => comment.text.match(/console.log/));
// import _ from 'lodash';
// comments.map((comment) => comment.authorName);




_.uniq(comments.map((comment) => comment.authorName));
