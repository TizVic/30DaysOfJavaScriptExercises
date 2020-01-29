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

