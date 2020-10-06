/**
 * Inheritance
 */
    
function Mammal(name, age) {
    this.name = name;
    this.age = age;

    // complex logic
}

Mammal.prototype.celebrateBirthday = function () {
    this.age++;
}



function Cat(name, age, lives) {
    Mammal.call(this, name, age);

    this.lives = lives;
}

// creates empty object with the Mammal prototype
Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;

let charlie = new Cat("Charlie", 8, 7);
console.log(charlie);