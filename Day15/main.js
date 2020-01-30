/**
 * Day 15 exercises
 */
/**
 * Level 1
 */
// L1.01 Create an Animal class. The class will have 
//       name, age, color, legs properties and create different methods
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    get getAnimalInfo(){
        return 'name: ' + this.name + ' age: ' + this.age;
    }
}

let athena = new Animal('Athena', 12, 'brown', 4);
console.log(athena);

// L1.02 Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs);
        this.bark = sound;
    }
    get getSound() {
        return this.bark;
    }
}

class Cat extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs);
        this.meow = sound;
    }
    get getSound() {
        return this.meow;
    }
}
let purchy = new Cat('Purchy', 2, 'grey', 4, 'miaoo');
let lilly = new Dog('Lilly', 12, 'light brown', 4, 'bau bau');
console.table(purchy);
console.table(lilly);

/**
 * Level 2
 */
// L2.01 Override the method you create in Animal class
class NewCat extends Animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs);
        this.meow = sound;
    }
    get getSound() {
        return this.meow;
    }
    get getAnimalInfo() {
        return 'name: ' + this.name + ' age: ' + this.age + ' sound: ' + this.meow;
    }
}
let ermes = new NewCat('Ermes', 3, 'dark grey', 4, 'maooo');
console.table(ermes);

/**
 * Level 3
 */
// L3.01 Let's try to develop a program which calculate measure of central tendency of a sample
//       (mean, median, mode) and measure of variability(range, variance, standard deviation).
//       In addition to those measures find the min, max, count, percentile, and frequency distribution
//       of the sample. You can create a class called Statistics and create all the functions which do
//       statistical calculations as method for the Statistics class.
// TODO

// L3.02 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties 
//       and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//       Incomes is a set of incomes and its description and expenses is also a set of expenses and its
//       description.
// TODO
