/**
 * Constructors
 */
    
function Cat(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

Cat.prototype.getAge = function () {
    const today = new Date();
    const difference = today - this.birthday; // difference in milliseconds
    
    return Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
}

let charlie = new Cat('Charlie', new Date('2012-06-01'));
let ferdinand = new Cat('Ferdinand', new Date('2012-06-01'));

console.log(charlie.getAge());

console.log(charlie.getAge === ferdinand.getAge);

console.log(charlie);
console.log({});