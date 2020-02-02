/**
 * Day 16 Exercises
 */
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;
/**
 * Level 1
 */
// L1.01 Change skills array to JSON using JSON.stringify()
console.log(JSON.stringify(skills, undefined, 4));

// L1.02 Stringify the age variable
console.log(JSON.stringify(age, undefined, 4));

// L1.03 Stringify the isMarried variable
console.log(JSON.stringify(isMarried, undefined, 4));

// L1.04 Stringify the student object
console.log(JSON.stringify(student, undefined, 4));

/**
 * Level 2
 */
// L2.01 Stringify the students object with only firstName, lastName and skills properties
console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4));

/**
 * Level 3
 */
// L3.01 Parse the txt JSON to object.
const objFromTxt = JSON.parse(txt);
console.log(objFromTxt);

// L3.02 Find the the user who has many skills from the variable stored in txt.
let userWithMostSkills = {user: '', totSkill: 0};
const arrayFromObj = Object.entries(objFromTxt); // [keys, values]
for (user of arrayFromObj) {
    if (user[1].skills.length > userWithMostSkills.totSkill) {
        userWithMostSkills.user = user[0];
        userWithMostSkills.totSkill = user[1].skills.length;
    }
}
console.log(JSON.stringify(userWithMostSkills, undefined, 4));
