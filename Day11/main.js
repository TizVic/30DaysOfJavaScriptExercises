/**
 * Day 11 exercises
 */
const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
const users = [{
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
];
/**
 * Level 1
 */
// L1.01 Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// L1.02 Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// L1.03 Destructure the rectangle object by its properties or keys.
let {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

/**
 * Level 2
 */
// L2.01 Iterate through the users array and get all the keys of the object using destructuring
for (const user of users) {
    let {name, scores, skills, age} = user;
    console.log(name, scores, skills, age);
}

// L2.02 Find the persons who have less than two skills
console.log(users.filter(({name, scores, skills, age}) => skills.length < 2));

/**
 * Level 3
 */
// L3.01 Destructure the countries object print name, capital, population and languages of all countries
for (const countryData of countriesList) {
    let {name, capital, languages, population, flag, currency} = countryData;
    console.log(name, capital, population);
}

// L3.02 A junior developer structure student name, skills and score in array of arrays 
//         which may not easy to read. Destructure the following array name to 
//         name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// console.log(name, skills, jsScore, reactScore)
// David (4) ["HTM", "CSS", "JS", "React"] 90 95
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

// L3.03 Write a function called convertArrayToObject which can convert the array to a 
//       structure object.
// console.log(convertArrayToObject(students))
// [
//   {
//     name: 'David',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [98,85,90,95]
//   },
//   {
//     name: 'John',
//     skills: ['HTM','CSS','JS','React'],
//     scores: [85, 80,85,80]
//   }
// ]
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];
const convertArrayToObject = arr => {
    let obj = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, skills, scores] = arr[i];
        obj.push({name, skills, scores});
    }
    return obj;
}
console.log(convertArrayToObject(students))

// L3.04 Copy the student object to newStudent without mutating the original object.
//       In the new object add the following
//       - Add Bootstrap with level 8 to the front end skill sets
//       - Add Express with level 9 to the back end skill sets
//       - Add SQL with level 8 to the data base skill sets
//       - Add SQL without level to the data science skill sets
// The copied object output should look like this: {
//     name: 'David',
//     age: 25,
//     skills: {
//         frontEnd: [{
//                 skill: 'HTML',
//                 level: 10
//             },
//             {
//                 skill: 'CSS',
//                 level: 8
//             },
//             {
//                 skill: 'JS',
//                 level: 8
//             },
//             {
//                 skill: 'React',
//                 level: 9
//             },
//             {
//                 skill: 'BootStrap',
//                 level: 8
//             }
//         ],
//         backEnd: [{
//                 skill: 'Node',
//                 level: 7
//             },
//             {
//                 skill: 'GraphQL',
//                 level: 8
//             },
//             {
//                 skill: 'Express',
//                 level: 9
//             }
//         ],
//         dataBase: [{
//                 skill: 'MongoDB',
//                 level: 7.5
//             },
//             {
//                 skill: 'SQL',
//                 level: 8
//             }
//         ],
//         dataScience: ['Python', 'R', 'D3.js', 'SQL']
//     }
// }
const student04 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const myStudent = Object.assign({}, student04);
myStudent.skills.frontEnd.push({skill:'Bootstrap', level:8});
myStudent.skills.backEnd.push({skill:'Express', level:9});
myStudent.skills.dataBase.push({skill:'SQL', level:8});
myStudent.skills.dataScience.push('SQL');
console.log(myStudent);
