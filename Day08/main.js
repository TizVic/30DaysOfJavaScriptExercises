/**
 * Day 08 Exercises
 */
// // Exercises: Level 1
// L1.01 Create an empty object called dog
let dog = {};

// L1.02 Print the the dog object on the console
console.log(dog);

// L1.03 Add name, legs, color, age and bark properties for the dog object. 
//       The bark property is a method which return woof woof
dog.name = 'Fuffy';
dog.legs = 4;
dog.color = 'brown';
dog.age = '7y';
dog.bark = () => 'woof woof';

// L1.04 Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// L1.05 Set new properties the dog object: breed, getDogInfo
dog.breed = '';
dog.getDogInfo = function() {};
console.log(dog);

/**
 * Exercises: Level 2
 */
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
// L2.01 Find the person who has many skills in the users object.
let maxSkill = {name: '', totalSkills: 0};
let userNames = Object.keys(users);
for (const name of userNames) {
    let user = users[name];
    if (maxSkill.totalSkills < user.skills.length) {
        maxSkill.name = name;
        maxSkill.totalSkills = user.skills.length;
    }
}
console.log(maxSkill);

// L2.02 Count logged in users,count users having greater than equal to 50 points from the following object.
let usersData = {totalLoggedin: 0, verySkilled: 0};
userNames = Object.keys(users);
for (const name of userNames) {
    let user = users[name];
    if (user.isLoggedIn === true) usersData.totalLoggedin++;
    if (user.points >= 50) usersData.verySkilled++;
}
console.log(`LoggedIn ${usersData.totalLoggedin}, Veryskilled ${usersData.verySkilled}`);

// L2.03 Find people who are MERN stack developer from the users object
let userMERN = [];
userNames = Object.keys(users);
for (const name of userNames) {
    let user = users[name];
    if ((user.skills.includes('Node') || user.skills.includes('Node.js')) &&
    user.skills.includes('Express') && user.skills.includes('MongoDB') &&
    user.skills.includes('React')) {
        console.log(name);
    }
}

// L2.04 Set your name in the users object without modifying the original users object
let myUsers = Object.assign({}, users);
myUsers.TizVic = {
  email: 'tizvic@me.com',
  skills: ['HTML', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node', 'C#', 'Java', 'jQuery', 'MySQL', 'PostgreSQL', 'MSSQL'],
  age: 50,
  isLoggedIn: false,
  points: 80

}
console.log(myUsers);

// L2.05 Get all keys or properties of users object
let usersKeys = Object.keys(users);
console.log(JSON.stringify(usersKeys));

// L2.06 Get all the values of users object
let usersValues = Object.values(users);
console.log(usersValues);

// L2.07 Use the countries object to print a country name, capital, populations and languages.
// for (let country of countries) {
//     console.log(`${country.name}\t${country.capital}\t${country.population}\t${country.languages}`);
// }

/**
 * Exercises: Level 3
 */
// L3.01 Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and 
//       it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//       Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
  firstName:'',
  lastName:'',
  incomes:[],
  expenses:[],
  totalIncome: function() {},
  totalExpense: function() {},
  accountInfo: function() {},
  addIncome: (income) => {personAccount.incomes.push(income);},
  addExpense: (expense) => {personAccount.expenses.push(expense);},
  accountBalance: () => {}
}
console.log(personAccount.addExpense([10, 'pizzas']));

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];
// L3.02 Imagine you are getting the above users collection from a MongoDB database. 
//       a. Create a function called signUp which allows user to add to the collection.
//          If user exists, inform the user that he has already an account. 
//       b. Create a function called signIn which allows user to sign in to the application 
const charsForIdGeneration = '0123456789abcdefghijklmnopqrstuvwxyz';
const idGenerator = () => {
    let id = '';
    for (let i = 0; i < 6; i++) {
        let rndIdx = Math.floor(Math.random() * charsForIdGeneration.length);
        id += charsForIdGeneration[rndIdx];
    }
    return id;
}
// a.
const signUp = (userName, userEmail, userPassword) => {
    for (let i = 0; i < users1.length; i++) {
      if (users1[i].username.includes(userName)) {
        return `${userName} already exists!`;
      }      
    }
    users1.push({
      _id: idGenerator(),
      username: userName,
      email: userEmail,
      password: userPassword,
      createdAt: new Date(),
      isLoggedIn: false
    });
    return 'OK';
}

// b.
const signIn = (userName, userPassword) => {
  for (let i = 0; i < users1.length; i++) {
    if (users1[i].username.includes(userName)) {
      if (userPassword === users1[i].password) {
        users1[i].isLoggedIn = true;
        return users1[i];
      }
    }      
  }
  return {};
}
// console.log(signUp('TizVic', 'tizvic@gmail.com', 'abcdefg'));
console.log(signIn('Thomas', '123333'));

// L3.03 The products array has three elements and each of them has six properties. 
//       a. Create a function called rateProduct which rates the product 
//       b. Create a function called averageRating which calculate the average rating of a product
const rateProduct = (idProduct, userName, ratePoints) => {
  
  const convertToArray = (arr, field) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i][field]);
    }
    return newArr;
  }

  const getUserIdByUsername = (userName) => {
    for (let i = 0; i < users1.length; i++) {
      if (users1[i].username.includes(userName)) {
          return users1[i]._id;
      }      
    }
    return null;
  }

  // let ratingsArray = convertToArray(products, 'ratings');
  let productsArray = convertToArray(products, 'name');
  if (!productsArray.includes(idProduct)) {
    return `${idProduct} doesn\'t exists`;
  } 
  const productToRateindex = productsArray.indexOf(idProduct);
  const productToRate = products[productToRateindex];
  productToRate.ratings.push({userId: getUserIdByUsername(userName), rate: ratePoints});
} 

rateProduct('Laptop', 'Thomas', 10);


// L3.04 Create a function called likeProduct. This function will helps to like to the product if it is not liked 
//       and remove like if it was liked.
