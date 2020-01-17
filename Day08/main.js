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

// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object

// Get all the values of users object

// Use the countries object to print a country name, capital, populations and languages.