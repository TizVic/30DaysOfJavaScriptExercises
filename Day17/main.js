/**
 * Day 17 Exercises
 */
/**
 * Level 1
 */
// L1.01 Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Tiz');
localStorage.setItem('lastName', 'Vic');
localStorage.setItem('age', 500);
localStorage.setItem('country', 'Italy');
localStorage.setItem('city', 'Verone');

/**
 * Exercises: Level 2
 */
// L2.01 Create a student object. The student object will have 
//       first name, last name, age, skills, country, enrolled keys and values for the keys.
//       Store the student object in your browser localStorage.
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python'],
    country: 'Finland',
    enrolled: {
        html: true,
        javascript: true,
        csharp: false
    }
  }
localStorage.setItem('student', JSON.stringify(student, undefined, 4));

/** 
 * Exercises: Level 3
 */
// L3.01 Create an object called personAccount. It has firstname, lastname, incomes, expenses properties
//       and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//       Incomes is a set of incomes and its description and expenses is also a set of expenses and
//       its description.
const personAccount = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python'],
    country: 'Finland',
    enrolled: {
        html: true,
        javascript: true,
        csharp: false
    },
    getEnrolled: () => JSON.stringify(personAccount.enrolled, undefined, 4)
}
localStorage.setItem('personAccount', JSON.stringify(student, undefined, 4));

